/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import dao.RewardsDAO;
import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import model.RewardModel;

/**
 *
 * @author User
 */
public class RewardsService {
    public static List<RewardModel> getRewards() {
        try {
            return RewardsDAO.getAllRewards();
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(RewardsService.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }
    public static void main(String[] args) {
        getRewards().forEach(item -> System.out.println(item));
    }
}
