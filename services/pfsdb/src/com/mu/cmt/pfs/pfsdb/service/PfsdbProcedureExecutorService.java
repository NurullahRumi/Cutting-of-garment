/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.service;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.sql.Date;

import com.mu.cmt.pfs.pfsdb.models.procedure.*;

public interface PfsdbProcedureExecutorService {

    ProcCu1000pk0QryCufabReceivedResponse executeProcCU1000PK0_QryCUFabReceived(String puserId, String pprogId, String pordnum, String pdyejob, String pcutsts);

    Void executeProcCU210PK0_CancelCU_Transfer(String psdyejob, String pddyejob, String pdordnum, Integer psfabseq, String pusrid, String preason);

    ProcCu1000pk0QryJobCutOrderResponse executeProcCU1000pk0_qryJobCutOrder(String pprogId, String pordnum, String pdyejob);

    Void executeProcCU1000PK0_UpdFabReceived(String puserId, String pprogId, String pdyejob, Integer pfabseq, Integer precseq, String pnewCutsts, Double pnewKgsWgh, String pnewRemarks);

    Void executeProcCU900pk0_InsNewDyejob(String pusrid, String pprgid, String pdyejob, String pordnum, String pgmtseq, Integer pclrseqg, Integer pfabseq, String pcutlcn, String prdyejob);

    ProcCu1000pk0QueryJobscutResponse executeProcCU1000PK0_QueryJobscut(String puserId, String pprogId, String pordnum, String pfabseq, String pdyejob);

    ProcCu1000pk0LastJobRemarksDetailResponse executeProcCU1000PK0_LastJobRemarksDetail(String puserId, String pprogId, String pordnum, Integer pclrseqg, String pgmtseq);

    ProcCu100pk0GetLastRemDetResponse executeProcCU100PK0_GetLastRemDet(String puserId, String pprogId, String pordnum, Integer pclrseqg, String pgmtseq);

    ProcCu1000pk0GetCu900availMarkersResponse executeProcCU1000PK0_GetCU900AvailMarkers(String puserId, String pprogId, String pdyejob);

    ProcCu210pk0QueryJobTransfersResponse executeProcCU210PK0_QueryJobTransfers(String puserId, String pprogId, String psordnum, String psdyejob, String pdordnum, String pddyejob);

    Void executeProcCU210PK0_UpdCqReamrks(String puserId, String pprogId, String psdyejob, String psfabseq, String pddyejob, String ptrftyp, String pcqremarks);

    ProcCu1000pk0LastJobRemarksResponse executeProcCU1000PK0_LastJobRemarks(String puserId, String pprogId, String pordnum, Integer pclrseq, String pgmtseq);

    ProcCu1000pk0SprocGetLastremarkCutstsResponse executeProcCU1000PK0_sproc_get_lastremark_cutsts();

    Void executeProcCU900pk0_CreateAutoMarker(String pdyejob, String pgmtseq, Integer pclrseqg, Integer pfabseq, Integer pcutseq, String pordnum, String pmodelvariant, String pmodelFabtyp, String pfabcode, Integer pfromwid, Integer ptowid, String plcncod, String pusrid, String pstage, String pfabconstraint, String pnightSchedule);

    ProcCu1000pk0GetCu900dyejobResponse executeProcCU1000PK0_GetCU900Dyejob(String puserId, String pprogId, String pordnum, String pdyejob, Date pfromdate, Date ptodate, String pfilterType);

    ProcCu1000pk0QryCutBySizeOrderDetResponse executeProcCU1000PK0_QryCutBySize_OrderDet(String puserId, String pprogId, String pordnum, Integer pcolour, String pgarment);

    Void executeProcCU900pk0_InsSizes(String pdyejob, String pgmtseq, Integer pclrseqg, Integer pfabseq, Integer pcutseq, String pordnum);

    ProcCu1000pk0psprocCallMakeupmainPageResponse executeProcCu1000pk0psproc_call_makeupmain_page();

    ProcCu1000pk0QryCuttingBySizeResponse executeProcCU1000PK0_QryCuttingBySize(String pprogId, String pordnum, Integer pcolour, String pgarment, String pfabcat);

    ProcCu1000pk0OrszSizesResponse executeProcCU1000PK0_OrszSizes(String puserId, String pprogId, String pordnum);

    Void executeProcCU1000PK0_UpdRemarks(String puserId, String pprogId, String pordnum, Integer pclrseqg, String pgmtseq, String pcutrem, String pcutlcn, String pcutsts, String pmakrem, String puldrem, String pembrem, String pcutexc, String pmakexc, String puldexc, String pembexc);

}