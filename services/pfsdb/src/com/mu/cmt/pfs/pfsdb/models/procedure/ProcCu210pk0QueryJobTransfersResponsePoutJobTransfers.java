/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcCu210pk0QueryJobTransfersResponsePoutJobTransfers implements Serializable {


    @ColumnAlias("SDYEJOB")
    private String sdyejob;

    @ColumnAlias("SORDNUM")
    private String sordnum;

    @ColumnAlias("SCLRSEQ")
    private Byte sclrseq;

    @ColumnAlias("CLRABB")
    private String clrabb;

    @ColumnAlias("SFABSEQ")
    private Byte sfabseq;

    @ColumnAlias("SFABIND")
    private String sfabind;

    @ColumnAlias("SFABTYP")
    private String sfabtyp;

    @ColumnAlias("DDYEJOB")
    private String ddyejob;

    @ColumnAlias("DORDNUM")
    private String dordnum;

    @ColumnAlias("DFABSEQ")
    private Byte dfabseq;

    @ColumnAlias("DCLRSEQ")
    private Byte dclrseq;

    @ColumnAlias("TRFDAT")
    private LocalDateTime trfdat;

    @ColumnAlias("TRFQTY")
    private Double trfqty;

    @ColumnAlias("CUTLCN")
    private String cutlcn;

    @ColumnAlias("W_DMAKLCN")
    private String wdmaklcn;

    @ColumnAlias("REASON")
    private String reason;

    @ColumnAlias("TRFTYP")
    private String trftyp;

    @ColumnAlias("APPID")
    private String appid;

    @ColumnAlias("RECID")
    private String recid;

    @ColumnAlias("CQREMARKS")
    private String cqremarks;

    @ColumnAlias("STATUS")
    private BigInteger status;

    @ColumnAlias("CUNTROW")
    private BigInteger cuntrow;

    public String getSdyejob() {
        return this.sdyejob;
    }

    public void setSdyejob(String sdyejob) {
        this.sdyejob = sdyejob;
    }

    public String getSordnum() {
        return this.sordnum;
    }

    public void setSordnum(String sordnum) {
        this.sordnum = sordnum;
    }

    public Byte getSclrseq() {
        return this.sclrseq;
    }

    public void setSclrseq(Byte sclrseq) {
        this.sclrseq = sclrseq;
    }

    public String getClrabb() {
        return this.clrabb;
    }

    public void setClrabb(String clrabb) {
        this.clrabb = clrabb;
    }

    public Byte getSfabseq() {
        return this.sfabseq;
    }

    public void setSfabseq(Byte sfabseq) {
        this.sfabseq = sfabseq;
    }

    public String getSfabind() {
        return this.sfabind;
    }

    public void setSfabind(String sfabind) {
        this.sfabind = sfabind;
    }

    public String getSfabtyp() {
        return this.sfabtyp;
    }

    public void setSfabtyp(String sfabtyp) {
        this.sfabtyp = sfabtyp;
    }

    public String getDdyejob() {
        return this.ddyejob;
    }

    public void setDdyejob(String ddyejob) {
        this.ddyejob = ddyejob;
    }

    public String getDordnum() {
        return this.dordnum;
    }

    public void setDordnum(String dordnum) {
        this.dordnum = dordnum;
    }

    public Byte getDfabseq() {
        return this.dfabseq;
    }

    public void setDfabseq(Byte dfabseq) {
        this.dfabseq = dfabseq;
    }

    public Byte getDclrseq() {
        return this.dclrseq;
    }

    public void setDclrseq(Byte dclrseq) {
        this.dclrseq = dclrseq;
    }

    public LocalDateTime getTrfdat() {
        return this.trfdat;
    }

    public void setTrfdat(LocalDateTime trfdat) {
        this.trfdat = trfdat;
    }

    public Double getTrfqty() {
        return this.trfqty;
    }

    public void setTrfqty(Double trfqty) {
        this.trfqty = trfqty;
    }

    public String getCutlcn() {
        return this.cutlcn;
    }

    public void setCutlcn(String cutlcn) {
        this.cutlcn = cutlcn;
    }

    public String getWdmaklcn() {
        return this.wdmaklcn;
    }

    public void setWdmaklcn(String wdmaklcn) {
        this.wdmaklcn = wdmaklcn;
    }

    public String getReason() {
        return this.reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getTrftyp() {
        return this.trftyp;
    }

    public void setTrftyp(String trftyp) {
        this.trftyp = trftyp;
    }

    public String getAppid() {
        return this.appid;
    }

    public void setAppid(String appid) {
        this.appid = appid;
    }

    public String getRecid() {
        return this.recid;
    }

    public void setRecid(String recid) {
        this.recid = recid;
    }

    public String getCqremarks() {
        return this.cqremarks;
    }

    public void setCqremarks(String cqremarks) {
        this.cqremarks = cqremarks;
    }

    public BigInteger getStatus() {
        return this.status;
    }

    public void setStatus(BigInteger status) {
        this.status = status;
    }

    public BigInteger getCuntrow() {
        return this.cuntrow;
    }

    public void setCuntrow(BigInteger cuntrow) {
        this.cuntrow = cuntrow;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcCu210pk0QueryJobTransfersResponsePoutJobTransfers)) return false;
        final ProcCu210pk0QueryJobTransfersResponsePoutJobTransfers procCu210pk0queryJobTransfersResponsePoutJobTransfers = (ProcCu210pk0QueryJobTransfersResponsePoutJobTransfers) o;
        return Objects.equals(getSdyejob(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getSdyejob()) &&
                Objects.equals(getSordnum(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getSordnum()) &&
                Objects.equals(getSclrseq(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getSclrseq()) &&
                Objects.equals(getClrabb(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getClrabb()) &&
                Objects.equals(getSfabseq(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getSfabseq()) &&
                Objects.equals(getSfabind(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getSfabind()) &&
                Objects.equals(getSfabtyp(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getSfabtyp()) &&
                Objects.equals(getDdyejob(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getDdyejob()) &&
                Objects.equals(getDordnum(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getDordnum()) &&
                Objects.equals(getDfabseq(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getDfabseq()) &&
                Objects.equals(getDclrseq(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getDclrseq()) &&
                Objects.equals(getTrfdat(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getTrfdat()) &&
                Objects.equals(getTrfqty(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getTrfqty()) &&
                Objects.equals(getCutlcn(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getCutlcn()) &&
                Objects.equals(getWdmaklcn(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getWdmaklcn()) &&
                Objects.equals(getReason(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getReason()) &&
                Objects.equals(getTrftyp(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getTrftyp()) &&
                Objects.equals(getAppid(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getAppid()) &&
                Objects.equals(getRecid(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getRecid()) &&
                Objects.equals(getCqremarks(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getCqremarks()) &&
                Objects.equals(getStatus(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getStatus()) &&
                Objects.equals(getCuntrow(), procCu210pk0queryJobTransfersResponsePoutJobTransfers.getCuntrow());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getSdyejob(),
                getSordnum(),
                getSclrseq(),
                getClrabb(),
                getSfabseq(),
                getSfabind(),
                getSfabtyp(),
                getDdyejob(),
                getDordnum(),
                getDfabseq(),
                getDclrseq(),
                getTrfdat(),
                getTrfqty(),
                getCutlcn(),
                getWdmaklcn(),
                getReason(),
                getTrftyp(),
                getAppid(),
                getRecid(),
                getCqremarks(),
                getStatus(),
                getCuntrow());
    }
}