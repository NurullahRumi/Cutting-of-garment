/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.io.Serializable;
import java.util.Objects;

public class VRft90201Id implements Serializable {

    private String approle;
    private String appid;
    private String userid;
    private String rolename;

    public String getApprole() {
        return this.approle;
    }

    public void setApprole(String approle) {
        this.approle = approle;
    }

    public String getAppid() {
        return this.appid;
    }

    public void setAppid(String appid) {
        this.appid = appid;
    }

    public String getUserid() {
        return this.userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getRolename() {
        return this.rolename;
    }

    public void setRolename(String rolename) {
        this.rolename = rolename;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof VRft90201)) return false;
        final VRft90201 vrft90201 = (VRft90201) o;
        return Objects.equals(getApprole(), vrft90201.getApprole()) &&
                Objects.equals(getAppid(), vrft90201.getAppid()) &&
                Objects.equals(getUserid(), vrft90201.getUserid()) &&
                Objects.equals(getRolename(), vrft90201.getRolename());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getApprole(),
                getAppid(),
                getUserid(),
                getRolename());
    }
}