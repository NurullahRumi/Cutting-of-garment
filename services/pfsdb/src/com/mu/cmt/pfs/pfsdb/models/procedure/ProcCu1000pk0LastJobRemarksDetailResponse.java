/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcCu1000pk0LastJobRemarksDetailResponse implements Serializable {


    @ColumnAlias("pOutDetailBlock")
    private List<ProcCu1000pk0LastJobRemarksDetailResponsePoutDetailBlock> poutDetailBlock;

    public List<ProcCu1000pk0LastJobRemarksDetailResponsePoutDetailBlock> getPoutDetailBlock() {
        return this.poutDetailBlock;
    }

    public void setPoutDetailBlock(List<ProcCu1000pk0LastJobRemarksDetailResponsePoutDetailBlock> poutDetailBlock) {
        this.poutDetailBlock = poutDetailBlock;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcCu1000pk0LastJobRemarksDetailResponse)) return false;
        final ProcCu1000pk0LastJobRemarksDetailResponse procCu1000pk0lastJobRemarksDetailResponse = (ProcCu1000pk0LastJobRemarksDetailResponse) o;
        return Objects.equals(getPoutDetailBlock(), procCu1000pk0lastJobRemarksDetailResponse.getPoutDetailBlock());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutDetailBlock());
    }
}