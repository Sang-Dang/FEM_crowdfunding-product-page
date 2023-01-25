/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import DBUtil.MainConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import model.RewardModel;

/**
 *
 * @author User
 */
public class RewardsDAO {

    public static List<RewardModel> getAllRewards() throws ClassNotFoundException, SQLException {
        Connection connection = MainConnection.getConnection();
        String query = "SELECT r.rewardID, r.name, r.description, r.minpledge, ri.count\n"
                + "FROM Rewards_List r \n"
                + "INNER JOIN Rewards_Inventory ri ON r.rewardID = ri.rewardID;";
        PreparedStatement statement = connection.prepareStatement(query);
        ResultSet result = statement.executeQuery();
        List<RewardModel> returnValue = new ArrayList<>();
        while (result.next()) {
            String rewardID = result.getString("rewardID");
            String name = result.getString("name");
            String description = result.getString("description");
            int minPledge = result.getInt("minpledge");
            int count = result.getInt("count");
            RewardModel reward = new RewardModel(rewardID, name, description, minPledge, count);
            returnValue.add(reward);
        }
        return returnValue;
    }

    public static void main(String[] args) throws Exception {
        getAllRewards().forEach(item -> System.out.println(item));
    }
}
