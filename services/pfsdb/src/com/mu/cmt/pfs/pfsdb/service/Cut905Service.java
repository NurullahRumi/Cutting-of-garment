/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.service;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.io.OutputStream;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.wavemaker.runtime.data.exception.EntityNotFoundException;
import com.wavemaker.runtime.data.export.DataExportOptions;
import com.wavemaker.runtime.data.export.ExportType;
import com.wavemaker.runtime.data.expression.QueryFilter;
import com.wavemaker.runtime.data.model.AggregationInfo;
import com.wavemaker.runtime.file.model.Downloadable;

import com.mu.cmt.pfs.pfsdb.Cut905;
import com.mu.cmt.pfs.pfsdb.Cut905Id;

/**
 * Service object for domain model class {@link Cut905}.
 */
public interface Cut905Service {

    /**
     * Creates a new Cut905. It does cascade insert for all the children in a single transaction.
     *
     * This method overrides the input field values using Server side or database managed properties defined on Cut905 if any.
     *
     * @param cut905 Details of the Cut905 to be created; value cannot be null.
     * @return The newly created Cut905.
     */
    Cut905 create(@Valid Cut905 cut905);


	/**
     * Returns Cut905 by given id if exists.
     *
     * @param cut905Id The id of the Cut905 to get; value cannot be null.
     * @return Cut905 associated with the given cut905Id.
	 * @throws EntityNotFoundException If no Cut905 is found.
     */
    Cut905 getById(Cut905Id cut905Id);

    /**
     * Find and return the Cut905 by given id if exists, returns null otherwise.
     *
     * @param cut905Id The id of the Cut905 to get; value cannot be null.
     * @return Cut905 associated with the given cut905Id.
     */
    Cut905 findById(Cut905Id cut905Id);

	/**
     * Find and return the list of Cut905s by given id's.
     *
     * If orderedReturn true, the return List is ordered and positional relative to the incoming ids.
     *
     * In case of unknown entities:
     *
     * If enabled, A null is inserted into the List at the proper position(s).
     * If disabled, the nulls are not put into the return List.
     *
     * @param cut905Ids The id's of the Cut905 to get; value cannot be null.
     * @param orderedReturn Should the return List be ordered and positional in relation to the incoming ids?
     * @return Cut905s associated with the given cut905Ids.
     */
    List<Cut905> findByMultipleIds(List<Cut905Id> cut905Ids, boolean orderedReturn);


    /**
     * Updates the details of an existing Cut905. It replaces all fields of the existing Cut905 with the given cut905.
     *
     * This method overrides the input field values using Server side or database managed properties defined on Cut905 if any.
     *
     * @param cut905 The details of the Cut905 to be updated; value cannot be null.
     * @return The updated Cut905.
     * @throws EntityNotFoundException if no Cut905 is found with given input.
     */
    Cut905 update(@Valid Cut905 cut905);

    /**
     * Deletes an existing Cut905 with the given id.
     *
     * @param cut905Id The id of the Cut905 to be deleted; value cannot be null.
     * @return The deleted Cut905.
     * @throws EntityNotFoundException if no Cut905 found with the given id.
     */
    Cut905 delete(Cut905Id cut905Id);

    /**
     * Deletes an existing Cut905 with the given object.
     *
     * @param cut905 The instance of the Cut905 to be deleted; value cannot be null.
     */
    void delete(Cut905 cut905);

    /**
     * Find all Cut905s matching the given QueryFilter(s).
     * All the QueryFilter(s) are ANDed to filter the results.
     * This method returns Paginated results.
     *
     * @deprecated Use {@link #findAll(String, Pageable)} instead.
     *
     * @param queryFilters Array of queryFilters to filter the results; No filters applied if the input is null/empty.
     * @param pageable Details of the pagination information along with the sorting options. If null returns all matching records.
     * @return Paginated list of matching Cut905s.
     *
     * @see QueryFilter
     * @see Pageable
     * @see Page
     */
    @Deprecated
    Page<Cut905> findAll(QueryFilter[] queryFilters, Pageable pageable);

    /**
     * Find all Cut905s matching the given input query. This method returns Paginated results.
     * Note: Go through the documentation for <u>query</u> syntax.
     *
     * @param query The query to filter the results; No filters applied if the input is null/empty.
     * @param pageable Details of the pagination information along with the sorting options. If null returns all matching records.
     * @return Paginated list of matching Cut905s.
     *
     * @see Pageable
     * @see Page
     */
    Page<Cut905> findAll(String query, Pageable pageable);

    /**
     * Exports all Cut905s matching the given input query to the given exportType format.
     * Note: Go through the documentation for <u>query</u> syntax.
     *
     * @param exportType The format in which to export the data; value cannot be null.
     * @param query The query to filter the results; No filters applied if the input is null/empty.
     * @param pageable Details of the pagination information along with the sorting options. If null exports all matching records.
     * @return The Downloadable file in given export type.
     *
     * @see Pageable
     * @see ExportType
     * @see Downloadable
     */
    Downloadable export(ExportType exportType, String query, Pageable pageable);

    /**
     * Exports all Cut905s matching the given input query to the given exportType format.
     *
     * @param options The export options provided by the user; No filters applied if the input is null/empty.
     * @param pageable Details of the pagination information along with the sorting options. If null exports all matching records.
     * @param outputStream The output stream of the file for the exported data to be written to.
     *
     * @see DataExportOptions
     * @see Pageable
     * @see OutputStream
     */
    void export(DataExportOptions options, Pageable pageable, OutputStream outputStream);

    /**
     * Retrieve the count of the Cut905s in the repository with matching query.
     * Note: Go through the documentation for <u>query</u> syntax.
     *
     * @param query query to filter results. No filters applied if the input is null/empty.
     * @return The count of the Cut905.
     */
    long count(String query);

    /**
     * Retrieve aggregated values with matching aggregation info.
     *
     * @param aggregationInfo info related to aggregations.
     * @param pageable Details of the pagination information along with the sorting options. If null exports all matching records.
     * @return Paginated data with included fields.
     *
     * @see AggregationInfo
     * @see Pageable
     * @see Page
	 */
    Page<Map<String, Object>> getAggregatedValues(AggregationInfo aggregationInfo, Pageable pageable);


}