/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.dao;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.wavemaker.runtime.data.dao.WMGenericDaoImpl;

import com.mu.cmt.pfs.pfsdb.Cut905;
import com.mu.cmt.pfs.pfsdb.Cut905Id;

/**
 * Specifies methods used to obtain and modify Cut905 related information
 * which is stored in the database.
 */
@Repository("pfsdb.Cut905Dao")
public class Cut905Dao extends WMGenericDaoImpl<Cut905, Cut905Id> {

    @Autowired
    @Qualifier("pfsdbTemplate")
    private HibernateTemplate template;


    @Override
    public HibernateTemplate getTemplate() {
        return this.template;
    }
}