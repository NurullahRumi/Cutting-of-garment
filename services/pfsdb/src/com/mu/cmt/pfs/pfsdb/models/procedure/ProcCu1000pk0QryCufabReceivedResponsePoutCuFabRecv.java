/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcCu1000pk0QryCufabReceivedResponsePoutCuFabRecv implements Serializable {


    @ColumnAlias("DYEJOB")
    private String dyejob;

    @ColumnAlias("ORDNUM")
    private String ordnum;

    @ColumnAlias("CLRSEQ")
    private Byte clrseq;

    @ColumnAlias("W_CLRABB")
    private String wclrabb;

    @ColumnAlias("LCNCOD")
    private String lcncod;

    @ColumnAlias("CUTSTS")
    private String cutsts;

    @ColumnAlias("DYELCN")
    private String dyelcn;

    @ColumnAlias("FABSEQ")
    private Byte fabseq;

    @ColumnAlias("W_FABTYP")
    private String wfabtyp;

    @ColumnAlias("NUMBALE")
    private Short numbale;

    @ColumnAlias("KGS")
    private Float kgs;

    @ColumnAlias("RECSEQ")
    private Byte recseq;

    @ColumnAlias("KGSCUT")
    private Double kgscut;

    @ColumnAlias("DDELNUM")
    private String ddelnum;

    @ColumnAlias("RECDATE")
    private LocalDateTime recdate;

    @ColumnAlias("MAKLCN")
    private String maklcn;

    @ColumnAlias("MKLINE")
    private String mkline;

    @ColumnAlias("REMARKS")
    private String remarks;

    @ColumnAlias("KGSWGH")
    private Float kgswgh;

    public String getDyejob() {
        return this.dyejob;
    }

    public void setDyejob(String dyejob) {
        this.dyejob = dyejob;
    }

    public String getOrdnum() {
        return this.ordnum;
    }

    public void setOrdnum(String ordnum) {
        this.ordnum = ordnum;
    }

    public Byte getClrseq() {
        return this.clrseq;
    }

    public void setClrseq(Byte clrseq) {
        this.clrseq = clrseq;
    }

    public String getWclrabb() {
        return this.wclrabb;
    }

    public void setWclrabb(String wclrabb) {
        this.wclrabb = wclrabb;
    }

    public String getLcncod() {
        return this.lcncod;
    }

    public void setLcncod(String lcncod) {
        this.lcncod = lcncod;
    }

    public String getCutsts() {
        return this.cutsts;
    }

    public void setCutsts(String cutsts) {
        this.cutsts = cutsts;
    }

    public String getDyelcn() {
        return this.dyelcn;
    }

    public void setDyelcn(String dyelcn) {
        this.dyelcn = dyelcn;
    }

    public Byte getFabseq() {
        return this.fabseq;
    }

    public void setFabseq(Byte fabseq) {
        this.fabseq = fabseq;
    }

    public String getWfabtyp() {
        return this.wfabtyp;
    }

    public void setWfabtyp(String wfabtyp) {
        this.wfabtyp = wfabtyp;
    }

    public Short getNumbale() {
        return this.numbale;
    }

    public void setNumbale(Short numbale) {
        this.numbale = numbale;
    }

    public Float getKgs() {
        return this.kgs;
    }

    public void setKgs(Float kgs) {
        this.kgs = kgs;
    }

    public Byte getRecseq() {
        return this.recseq;
    }

    public void setRecseq(Byte recseq) {
        this.recseq = recseq;
    }

    public Double getKgscut() {
        return this.kgscut;
    }

    public void setKgscut(Double kgscut) {
        this.kgscut = kgscut;
    }

    public String getDdelnum() {
        return this.ddelnum;
    }

    public void setDdelnum(String ddelnum) {
        this.ddelnum = ddelnum;
    }

    public LocalDateTime getRecdate() {
        return this.recdate;
    }

    public void setRecdate(LocalDateTime recdate) {
        this.recdate = recdate;
    }

    public String getMaklcn() {
        return this.maklcn;
    }

    public void setMaklcn(String maklcn) {
        this.maklcn = maklcn;
    }

    public String getMkline() {
        return this.mkline;
    }

    public void setMkline(String mkline) {
        this.mkline = mkline;
    }

    public String getRemarks() {
        return this.remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public Float getKgswgh() {
        return this.kgswgh;
    }

    public void setKgswgh(Float kgswgh) {
        this.kgswgh = kgswgh;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcCu1000pk0QryCufabReceivedResponsePoutCuFabRecv)) return false;
        final ProcCu1000pk0QryCufabReceivedResponsePoutCuFabRecv procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv = (ProcCu1000pk0QryCufabReceivedResponsePoutCuFabRecv) o;
        return Objects.equals(getDyejob(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getDyejob()) &&
                Objects.equals(getOrdnum(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getOrdnum()) &&
                Objects.equals(getClrseq(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getClrseq()) &&
                Objects.equals(getWclrabb(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getWclrabb()) &&
                Objects.equals(getLcncod(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getLcncod()) &&
                Objects.equals(getCutsts(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getCutsts()) &&
                Objects.equals(getDyelcn(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getDyelcn()) &&
                Objects.equals(getFabseq(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getFabseq()) &&
                Objects.equals(getWfabtyp(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getWfabtyp()) &&
                Objects.equals(getNumbale(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getNumbale()) &&
                Objects.equals(getKgs(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getKgs()) &&
                Objects.equals(getRecseq(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getRecseq()) &&
                Objects.equals(getKgscut(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getKgscut()) &&
                Objects.equals(getDdelnum(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getDdelnum()) &&
                Objects.equals(getRecdate(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getRecdate()) &&
                Objects.equals(getMaklcn(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getMaklcn()) &&
                Objects.equals(getMkline(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getMkline()) &&
                Objects.equals(getRemarks(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getRemarks()) &&
                Objects.equals(getKgswgh(), procCu1000pk0qryCufabReceivedResponsePoutCuFabRecv.getKgswgh());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getDyejob(),
                getOrdnum(),
                getClrseq(),
                getWclrabb(),
                getLcncod(),
                getCutsts(),
                getDyelcn(),
                getFabseq(),
                getWfabtyp(),
                getNumbale(),
                getKgs(),
                getRecseq(),
                getKgscut(),
                getDdelnum(),
                getRecdate(),
                getMaklcn(),
                getMkline(),
                getRemarks(),
                getKgswgh());
    }
}