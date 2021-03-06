/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcCu1000pk0QueryJobscutResponse implements Serializable {


    @ColumnAlias("pOutOrderDetail")
    private List<ProcCu1000pk0QueryJobscutResponsePoutOrderDetail> poutOrderDetail;

    @ColumnAlias("pOutJobscutList")
    private List<ProcCu1000pk0QueryJobscutResponsePoutJobscutList> poutJobscutList;

    public List<ProcCu1000pk0QueryJobscutResponsePoutOrderDetail> getPoutOrderDetail() {
        return this.poutOrderDetail;
    }

    public void setPoutOrderDetail(List<ProcCu1000pk0QueryJobscutResponsePoutOrderDetail> poutOrderDetail) {
        this.poutOrderDetail = poutOrderDetail;
    }

    public List<ProcCu1000pk0QueryJobscutResponsePoutJobscutList> getPoutJobscutList() {
        return this.poutJobscutList;
    }

    public void setPoutJobscutList(List<ProcCu1000pk0QueryJobscutResponsePoutJobscutList> poutJobscutList) {
        this.poutJobscutList = poutJobscutList;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcCu1000pk0QueryJobscutResponse)) return false;
        final ProcCu1000pk0QueryJobscutResponse procCu1000pk0queryJobscutResponse = (ProcCu1000pk0QueryJobscutResponse) o;
        return Objects.equals(getPoutOrderDetail(), procCu1000pk0queryJobscutResponse.getPoutOrderDetail()) &&
                Objects.equals(getPoutJobscutList(), procCu1000pk0queryJobscutResponse.getPoutJobscutList());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutOrderDetail(),
                getPoutJobscutList());
    }
}