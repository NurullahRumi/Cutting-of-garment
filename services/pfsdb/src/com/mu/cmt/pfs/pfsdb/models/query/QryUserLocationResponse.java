/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.query;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class QryUserLocationResponse implements Serializable {


    @ColumnAlias("LCNCOD")
    private String lcncod;

    @ColumnAlias("SCNCOD")
    private String scncod;

    public String getLcncod() {
        return this.lcncod;
    }

    public void setLcncod(String lcncod) {
        this.lcncod = lcncod;
    }

    public String getScncod() {
        return this.scncod;
    }

    public void setScncod(String scncod) {
        this.scncod = scncod;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof QryUserLocationResponse)) return false;
        final QryUserLocationResponse qryUserLocationResponse = (QryUserLocationResponse) o;
        return Objects.equals(getLcncod(), qryUserLocationResponse.getLcncod()) &&
                Objects.equals(getScncod(), qryUserLocationResponse.getScncod());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getLcncod(),
                getScncod());
    }
}