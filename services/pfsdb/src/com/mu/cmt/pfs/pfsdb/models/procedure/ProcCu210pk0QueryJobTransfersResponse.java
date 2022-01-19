/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcCu210pk0QueryJobTransfersResponse implements Serializable {


    @ColumnAlias("pOutJobTransfers")
    private List<ProcCu210pk0QueryJobTransfersResponsePoutJobTransfers> poutJobTransfers;

    public List<ProcCu210pk0QueryJobTransfersResponsePoutJobTransfers> getPoutJobTransfers() {
        return this.poutJobTransfers;
    }

    public void setPoutJobTransfers(List<ProcCu210pk0QueryJobTransfersResponsePoutJobTransfers> poutJobTransfers) {
        this.poutJobTransfers = poutJobTransfers;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcCu210pk0QueryJobTransfersResponse)) return false;
        final ProcCu210pk0QueryJobTransfersResponse procCu210pk0queryJobTransfersResponse = (ProcCu210pk0QueryJobTransfersResponse) o;
        return Objects.equals(getPoutJobTransfers(), procCu210pk0queryJobTransfersResponse.getPoutJobTransfers());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutJobTransfers());
    }
}