/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.controller;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wavemaker.commons.wrapper.StringWrapper;
import com.wavemaker.runtime.data.export.DataExportOptions;
import com.wavemaker.runtime.data.export.ExportType;
import com.wavemaker.runtime.data.expression.QueryFilter;
import com.wavemaker.runtime.data.model.AggregationInfo;
import com.wavemaker.runtime.file.manager.ExportedFileManager;
import com.wavemaker.runtime.file.model.Downloadable;
import com.wavemaker.tools.api.core.annotations.WMAccessVisibility;
import com.wavemaker.tools.api.core.models.AccessSpecifier;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import com.wordnik.swagger.annotations.ApiParam;

import com.mu.cmt.pfs.pfsdb.Cut905;
import com.mu.cmt.pfs.pfsdb.Cut905Id;
import com.mu.cmt.pfs.pfsdb.service.Cut905Service;


/**
 * Controller object for domain model class Cut905.
 * @see Cut905
 */
@RestController("pfsdb.Cut905Controller")
@Api(value = "Cut905Controller", description = "Exposes APIs to work with Cut905 resource.")
@RequestMapping("/pfsdb/Cut905")
public class Cut905Controller {

    private static final Logger LOGGER = LoggerFactory.getLogger(Cut905Controller.class);

    @Autowired
	@Qualifier("pfsdb.Cut905Service")
	private Cut905Service cut905Service;

	@Autowired
	private ExportedFileManager exportedFileManager;

	@ApiOperation(value = "Creates a new Cut905 instance.")
    @RequestMapping(method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Cut905 createCut905(@RequestBody Cut905 cut905) {
		LOGGER.debug("Create Cut905 with information: {}" , cut905);

		cut905 = cut905Service.create(cut905);
		LOGGER.debug("Created Cut905 with information: {}" , cut905);

	    return cut905;
	}

    @ApiOperation(value = "Returns the Cut905 instance associated with the given composite-id.")
    @RequestMapping(value = "/composite-id", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Cut905 getCut905(@RequestParam("cutseq") Short cutseq, @RequestParam("sizeseq") Byte sizeseq, @RequestParam("ordnum") String ordnum, @RequestParam("dyejob") String dyejob, @RequestParam("gmtseq") String gmtseq, @RequestParam("clrseqg") Byte clrseqg, @RequestParam("fabseq") Byte fabseq) {

        Cut905Id cut905Id = new Cut905Id();
        cut905Id.setCutseq(cutseq);
        cut905Id.setSizeseq(sizeseq);
        cut905Id.setOrdnum(ordnum);
        cut905Id.setDyejob(dyejob);
        cut905Id.setGmtseq(gmtseq);
        cut905Id.setClrseqg(clrseqg);
        cut905Id.setFabseq(fabseq);

        LOGGER.debug("Getting Cut905 with id: {}" , cut905Id);
        Cut905 cut905 = cut905Service.getById(cut905Id);
        LOGGER.debug("Cut905 details with id: {}" , cut905);

        return cut905;
    }



    @ApiOperation(value = "Updates the Cut905 instance associated with the given composite-id.")
    @RequestMapping(value = "/composite-id", method = RequestMethod.PUT)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Cut905 editCut905(@RequestParam("cutseq") Short cutseq, @RequestParam("sizeseq") Byte sizeseq, @RequestParam("ordnum") String ordnum, @RequestParam("dyejob") String dyejob, @RequestParam("gmtseq") String gmtseq, @RequestParam("clrseqg") Byte clrseqg, @RequestParam("fabseq") Byte fabseq, @RequestBody Cut905 cut905) {

        cut905.setCutseq(cutseq);
        cut905.setSizeseq(sizeseq);
        cut905.setOrdnum(ordnum);
        cut905.setDyejob(dyejob);
        cut905.setGmtseq(gmtseq);
        cut905.setClrseqg(clrseqg);
        cut905.setFabseq(fabseq);

        LOGGER.debug("Cut905 details with id is updated with: {}" , cut905);

        return cut905Service.update(cut905);
    }


    @ApiOperation(value = "Deletes the Cut905 instance associated with the given composite-id.")
    @RequestMapping(value = "/composite-id", method = RequestMethod.DELETE)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public boolean deleteCut905(@RequestParam("cutseq") Short cutseq, @RequestParam("sizeseq") Byte sizeseq, @RequestParam("ordnum") String ordnum, @RequestParam("dyejob") String dyejob, @RequestParam("gmtseq") String gmtseq, @RequestParam("clrseqg") Byte clrseqg, @RequestParam("fabseq") Byte fabseq) {

        Cut905Id cut905Id = new Cut905Id();
        cut905Id.setCutseq(cutseq);
        cut905Id.setSizeseq(sizeseq);
        cut905Id.setOrdnum(ordnum);
        cut905Id.setDyejob(dyejob);
        cut905Id.setGmtseq(gmtseq);
        cut905Id.setClrseqg(clrseqg);
        cut905Id.setFabseq(fabseq);

        LOGGER.debug("Deleting Cut905 with id: {}" , cut905Id);
        Cut905 cut905 = cut905Service.delete(cut905Id);

        return cut905 != null;
    }


    /**
     * @deprecated Use {@link #findCut905s(String, Pageable)} instead.
     */
    @Deprecated
    @ApiOperation(value = "Returns the list of Cut905 instances matching the search criteria.")
    @RequestMapping(value = "/search", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Page<Cut905> searchCut905sByQueryFilters( Pageable pageable, @RequestBody QueryFilter[] queryFilters) {
        LOGGER.debug("Rendering Cut905s list by query filter:{}", (Object) queryFilters);
        return cut905Service.findAll(queryFilters, pageable);
    }

    @ApiOperation(value = "Returns the paginated list of Cut905 instances matching the optional query (q) request param. If there is no query provided, it returns all the instances. Pagination & Sorting parameters such as page& size, sort can be sent as request parameters. The sort value should be a comma separated list of field names & optional sort order to sort the data on. eg: field1 asc, field2 desc etc ")
    @RequestMapping(method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Page<Cut905> findCut905s(@ApiParam("conditions to filter the results") @RequestParam(value = "q", required = false) String query, Pageable pageable) {
        LOGGER.debug("Rendering Cut905s list by filter:", query);
        return cut905Service.findAll(query, pageable);
    }

    @ApiOperation(value = "Returns the paginated list of Cut905 instances matching the optional query (q) request param. This API should be used only if the query string is too big to fit in GET request with request param. The request has to made in application/x-www-form-urlencoded format.")
    @RequestMapping(value="/filter", method = RequestMethod.POST, consumes= "application/x-www-form-urlencoded")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Page<Cut905> filterCut905s(@ApiParam("conditions to filter the results") @RequestParam(value = "q", required = false) String query, Pageable pageable) {
        LOGGER.debug("Rendering Cut905s list by filter", query);
        return cut905Service.findAll(query, pageable);
    }

    @ApiOperation(value = "Returns downloadable file for the data matching the optional query (q) request param. If query string is too big to fit in GET request's query param, use POST method with application/x-www-form-urlencoded format.")
    @RequestMapping(value = "/export/{exportType}", method = {RequestMethod.GET,  RequestMethod.POST}, produces = "application/octet-stream")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Downloadable exportCut905s(@PathVariable("exportType") ExportType exportType, @ApiParam("conditions to filter the results") @RequestParam(value = "q", required = false) String query, Pageable pageable) {
         return cut905Service.export(exportType, query, pageable);
    }

    @ApiOperation(value = "Returns a URL to download a file for the data matching the optional query (q) request param and the required fields provided in the Export Options.") 
    @RequestMapping(value = "/export", method = {RequestMethod.POST}, consumes = "application/json")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public StringWrapper exportCut905sAndGetURL(@RequestBody DataExportOptions exportOptions, Pageable pageable) {
        String exportedFileName = exportOptions.getFileName();
        if(exportedFileName == null || exportedFileName.isEmpty()) {
            exportedFileName = Cut905.class.getSimpleName();
        }
        exportedFileName += exportOptions.getExportType().getExtension();
        String exportedUrl = exportedFileManager.registerAndGetURL(exportedFileName, outputStream -> cut905Service.export(exportOptions, pageable, outputStream));
        return new StringWrapper(exportedUrl);
    }

	@ApiOperation(value = "Returns the total count of Cut905 instances matching the optional query (q) request param. If query string is too big to fit in GET request's query param, use POST method with application/x-www-form-urlencoded format.")
	@RequestMapping(value = "/count", method = {RequestMethod.GET, RequestMethod.POST})
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
	public Long countCut905s( @ApiParam("conditions to filter the results") @RequestParam(value = "q", required = false) String query) {
		LOGGER.debug("counting Cut905s");
		return cut905Service.count(query);
	}

    @ApiOperation(value = "Returns aggregated result with given aggregation info")
	@RequestMapping(value = "/aggregations", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
	public Page<Map<String, Object>> getCut905AggregatedValues(@RequestBody AggregationInfo aggregationInfo, Pageable pageable) {
        LOGGER.debug("Fetching aggregated results for {}", aggregationInfo);
        return cut905Service.getAggregatedValues(aggregationInfo, pageable);
    }


    /**
	 * This setter method should only be used by unit tests
	 *
	 * @param service Cut905Service instance
	 */
	protected void setCut905Service(Cut905Service service) {
		this.cut905Service = service;
	}

}