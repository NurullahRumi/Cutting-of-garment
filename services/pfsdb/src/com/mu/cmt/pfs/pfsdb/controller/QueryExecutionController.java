/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.controller;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wavemaker.commons.wrapper.StringWrapper;
import com.wavemaker.runtime.data.export.ExportOptions;
import com.wavemaker.runtime.file.manager.ExportedFileManager;
import com.wavemaker.tools.api.core.annotations.WMAccessVisibility;
import com.wavemaker.tools.api.core.models.AccessSpecifier;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;

import com.mu.cmt.pfs.pfsdb.service.PfsdbQueryExecutorService;
import com.mu.cmt.pfs.pfsdb.models.query.*;

@RestController(value = "Pfsdb.QueryExecutionController")
@RequestMapping("/pfsdb/queryExecutor")
@Api(value = "QueryExecutionController", description = "controller class for query execution")
public class QueryExecutionController {

    private static final Logger LOGGER = LoggerFactory.getLogger(QueryExecutionController.class);

    @Autowired
    private PfsdbQueryExecutorService queryService;

    @Autowired
	private ExportedFileManager exportedFileManager;

    @RequestMapping(value = "/queries/QryReturnCallPage", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "QryReturnCallPage")
    public QryReturnCallPageResponse executeQryReturnCallPage(@RequestParam(value = "pWmprogid", required = false) String pwmprogid, @RequestParam(value = "pParamList", required = false) String pparamList, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: QryReturnCallPage");
        QryReturnCallPageResponse _result = queryService.executeQryReturnCallPage(pwmprogid, pparamList);
        LOGGER.debug("got the result for named query: QryReturnCallPage, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/queries/qryLectraSze", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "Get Lectra Sze")
    public QryLectraSzeResponse executeQryLectraSze(@RequestParam(value = "p_dyejob", required = false) String pdyejob, @RequestParam(value = "p_gmtseq", required = false) String pgmtseq, @RequestParam(value = "p_clrseqg", required = false) String pclrseqg, @RequestParam(value = "p_fabseq", required = false) String pfabseq, @RequestParam(value = "p_cutseq", required = false) String pcutseq, @RequestParam(value = "p_ordnum", required = false) String pordnum, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: qryLectraSze");
        QryLectraSzeResponse _result = queryService.executeQryLectraSze(pdyejob, pgmtseq, pclrseqg, pfabseq, pcutseq, pordnum);
        LOGGER.debug("got the result for named query: qryLectraSze, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/queries/qryCutlcn", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "query list of cut units")
    public Page<QryCutlcnResponse> executeQryCutlcn(Pageable pageable, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: qryCutlcn");
        Page<QryCutlcnResponse> _result = queryService.executeQryCutlcn(pageable);
        LOGGER.debug("got the result for named query: qryCutlcn, result:{}", _result);
        return _result;
    }

    @ApiOperation(value = "Returns downloadable file url for query qryCutlcn")
    @RequestMapping(value = "/queries/qryCutlcn/export", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public StringWrapper exportQryCutlcn(@RequestBody ExportOptions exportOptions, Pageable pageable) {
        LOGGER.debug("Exporting named query: qryCutlcn");

        String exportedFileName = exportOptions.getFileName();
        if(exportedFileName == null || exportedFileName.isEmpty()) {
            exportedFileName = "qryCutlcn";
        }
        exportedFileName += exportOptions.getExportType().getExtension();

        String exportedUrl = exportedFileManager.registerAndGetURL(exportedFileName,
                        outputStream -> queryService.exportQryCutlcn( exportOptions, pageable, outputStream));

        return new StringWrapper(exportedUrl);
    }

    @RequestMapping(value = "/queries/qryGetCUTFAB", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "Get CUTFAB")
    public QryGetCutfabResponse executeQryGetCUTFAB(@RequestParam(value = "pOrdnum", required = false) String pordnum, @RequestParam(value = "pClrseqg", required = false) Integer pclrseqg, @RequestParam(value = "pGmtseq", required = false) String pgmtseq, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: qryGetCUTFAB");
        QryGetCutfabResponse _result = queryService.executeQryGetCUTFAB(pordnum, pclrseqg, pgmtseq);
        LOGGER.debug("got the result for named query: qryGetCUTFAB, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/queries/qryCU220_Trftyp", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "get CU220 Trftyp")
    public QryCu220TrftypResponse executeQryCU220_Trftyp(@RequestParam(value = "p_Sdyejob", required = false) String psdyejob, @RequestParam(value = "p_Ddyejob", required = false) String pddyejob, @RequestParam(value = "p_Sfabseq", required = false) Integer psfabseq, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: qryCU220_Trftyp");
        QryCu220TrftypResponse _result = queryService.executeQryCU220_Trftyp(psdyejob, pddyejob, psfabseq);
        LOGGER.debug("got the result for named query: qryCU220_Trftyp, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/queries/qrySzeDes", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "Get Size Des")
    public QrySzeDesResponse executeQrySzeDes(@RequestParam(value = "pDyejob", required = false) String pdyejob, @RequestParam(value = "pGmtseq", required = false) String pgmtseq, @RequestParam(value = "pClrseqg", required = false) Integer pclrseqg, @RequestParam(value = "pFabseq", required = false) Integer pfabseq, @RequestParam(value = "pCutseq", required = false) Integer pcutseq, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: qrySzeDes");
        QrySzeDesResponse _result = queryService.executeQrySzeDes(pdyejob, pgmtseq, pclrseqg, pfabseq, pcutseq);
        LOGGER.debug("got the result for named query: qrySzeDes, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/queries/qryUserLocation", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "query user location")
    public QryUserLocationResponse executeQryUserLocation(@RequestParam(value = "pUsrid", required = false) String pusrid, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: qryUserLocation");
        QryUserLocationResponse _result = queryService.executeQryUserLocation(pusrid);
        LOGGER.debug("got the result for named query: qryUserLocation, result:{}", _result);
        return _result;
    }

    @RequestMapping(value = "/queries/qryGetItemcod", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "Get Item cod")
    public Page<QryGetItemcodResponse> executeQryGetItemcod(Pageable pageable, HttpServletRequest _request) {
        LOGGER.debug("Executing named query: qryGetItemcod");
        Page<QryGetItemcodResponse> _result = queryService.executeQryGetItemcod(pageable);
        LOGGER.debug("got the result for named query: qryGetItemcod, result:{}", _result);
        return _result;
    }

    @ApiOperation(value = "Returns downloadable file url for query qryGetItemcod")
    @RequestMapping(value = "/queries/qryGetItemcod/export", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public StringWrapper exportQryGetItemcod(@RequestBody ExportOptions exportOptions, Pageable pageable) {
        LOGGER.debug("Exporting named query: qryGetItemcod");

        String exportedFileName = exportOptions.getFileName();
        if(exportedFileName == null || exportedFileName.isEmpty()) {
            exportedFileName = "qryGetItemcod";
        }
        exportedFileName += exportOptions.getExportType().getExtension();

        String exportedUrl = exportedFileManager.registerAndGetURL(exportedFileName,
                        outputStream -> queryService.exportQryGetItemcod( exportOptions, pageable, outputStream));

        return new StringWrapper(exportedUrl);
    }

}