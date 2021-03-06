/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcCu1000pk0OrszSizesResponsePoutOrszSizes implements Serializable {


    @ColumnAlias("SZESEQ")
    private Byte szeseq;

    @ColumnAlias("SIZEDES")
    private String sizedes;

    public Byte getSzeseq() {
        return this.szeseq;
    }

    public void setSzeseq(Byte szeseq) {
        this.szeseq = szeseq;
    }

    public String getSizedes() {
        return this.sizedes;
    }

    public void setSizedes(String sizedes) {
        this.sizedes = sizedes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcCu1000pk0OrszSizesResponsePoutOrszSizes)) return false;
        final ProcCu1000pk0OrszSizesResponsePoutOrszSizes procCu1000pk0orszSizesResponsePoutOrszSizes = (ProcCu1000pk0OrszSizesResponsePoutOrszSizes) o;
        return Objects.equals(getSzeseq(), procCu1000pk0orszSizesResponsePoutOrszSizes.getSzeseq()) &&
                Objects.equals(getSizedes(), procCu1000pk0orszSizesResponsePoutOrszSizes.getSizedes());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getSzeseq(),
                getSizedes());
    }
}