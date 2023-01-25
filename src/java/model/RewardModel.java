/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

/**
 *
 * @author User
 */
public class RewardModel {
    private String rewardID;
    private String name;
    private String description;
    private int minPledge;
    private int count;

    public RewardModel(String rewardID, String name, String description, int minPledge, int count) {
        this.rewardID = rewardID;
        this.name = name;
        this.description = description;
        this.minPledge = minPledge;
        this.count = count;
    }

    public String getRewardID() {
        return rewardID;
    }

    public void setRewardID(String rewardID) {
        this.rewardID = rewardID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getMinPledge() {
        return minPledge;
    }

    public void setMinPledge(int minPledge) {
        this.minPledge = minPledge;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
    
    @Override
    public String toString() {
        return this.rewardID + " " + this.name + " " + this.description + " " + this.minPledge + " " + this.count;
    }
}
