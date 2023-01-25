/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import dao.SubmissionsDAO;
import java.sql.Date;
import java.sql.SQLException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.DonationModel;

/**
 *
 * @author User
 */
public class DonationService {

    public static boolean validateDonation(HttpServletRequest request, HttpServletResponse response) {
        String rewardID = request.getParameter("rewardID");
        int count = Integer.parseInt(request.getParameter("amount").replaceAll("\\$", ""));
        Date date = new Date(System.currentTimeMillis());
        try {
            DonationModel donation = new DonationModel(date, count, rewardID);
            return SubmissionsDAO.submit(donation);
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println(e);
            System.out.println("SOMEONE FUCKED UP");
            return false;
        }
    }
}
