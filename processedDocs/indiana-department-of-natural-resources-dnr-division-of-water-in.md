---
id: "indiana-department-of-natural-resources-dnr-division-of-water-in"
name: "DNR - WLP - SOR 071124 REV 4 final.docx"
sorType: "Application Modernization"
agency: "Indiana Department of Natural Resources (DNR), Division of Water"
client: "Indiana Department of Natural Resources (DNR) — Division of Water"
date: "2024-07-08"
documentPath: "existingSORDocs/SORdocs/DNR - WLP - SOR 071124 REV 4 final.docx"
extractedAt: "2025-08-26T09:02:14.885908+00:00Z"
---


__CAI Indiana MSP QPA \#58993__

__Statement of Requirements for __

__Information Technology Project Services__

__Agency:  Indiana Department of Natural Resources__

__Project Name: Division of Water Licensing & Permitting __

__Date:__  8 July 2024

# __ Solicitation Schedule__

__Activity__

__Date__

Issue Request for IT Consulting Services

__7/11/2024__

Preproposal Conference

__N/A__

Deadline for Vendors to Submit Written Questions, via Q&A Template, to [[redacted-email]](mailto:[redacted-email]) by 2:00pm EDT

__7/18/2024__

Agency Answers to Written Questions

__8/2/2024__

Proposals Due in VectorVMS by 2:00pm EDT

__8/16/2024__

Evaluation of Proposals

__8/26/2024__

Best and Final Offers

__9/9/2024__

Services Awarded

__9/12/2024__

Services Start

__9/19/2024__

*The above timeline is only an illustration of the Request for ITCS process. The dates associated with each step are not to be considered binding. Due to the unpredictable nature of the ITCS process in general, these dates are commonly subject to change. At the conclusion of the evaluation process, all Respondents will be informed of the Evaluation Team’s findings.*

*During the procurement process, IT Vendors are to have no contact with the Agency. Such action may disqualify Respondent from further consideration for an award or contract resulting from this process.*

# __Conflict of Interest__

Any person, firm or entity that is actively assisting with and/or participating in the project identified in this solicitation document is prohibited from submitting a proposal to this specific IT Statement of Requirements. For the purposes of this solicitation, a “person” means a State officer, employee, special State appointee, or any individual or entity working with or advising the State. 

# <a id="_Toc350351306"></a>__Project Background__

__PROJECT OVERVIEW  __

1. __IT Project Identification__
	- Project Purpose and Objective 

The Division of Water of the Indiana Department of Natural Resources is involved with many regulatory and planning programs related to the management of the water resources for the State of Indiana.  With that responsibility, the management of data related to our programs is a mission critical activity. The purpose of this document is to list the minimum requirements for a database system for the Division, to provide guidelines for evaluating existing applications and planning for future enhancements. Please note that this is a portion of a larger project.  There is an opportunity for the selected vendor to provide support for the remaining phases of this project, depending on performance.

DNR would prefer the system to be developed using the Salesforce platform, but we are open to other solutions that would meet these requirements. Depending on the solution, the selected vendor may work with IOT to secure appropriate licenses. 

DNR prefers to use an agile methodology on all modules and development work identified in Phase 1 Group A first would be implemented then during the initial implementation, DNR would prefer Phase 1 Group B modules be developed and implemented in a similar fashion. However, DNR is also open to other development strategies.

This is the first iteration of a larger project and will need to be included to interact with future iterations. 

- 
	- Total Duration (Months)
	- 6-Months
	- Drivers for IT Services Needs
	- Replacing the legacy system 

1. __Acronyms/Definitions   
__

- GIS – Geographic Information Systems
- IOT – Indiana Office of Technology
- SSO- Single Sign On
- ATS – Application Tracking System
- ESRI- Environmental Systems Research Institute, Inc
- CTS – Correspondence Tracking System
- VTS – Violations Tracking System
- FEMA – Federal Emergency Management Agency
- SEA – Senate Enrolled Act
- WR&U Section – Water Rights & Use Section
- GW- Ground Water
- SW- Surface Water
- TRS- Township, range, section
- WDPI – Well Driller & Pump Installer
- SWWF – Significant Water Withdrawal Facility
- USGS – United States Geological Survey
- DOW – Division of Water
- NFIP – National Flood Insurance Program
- LOMC – Letters of Map Change 
- QC – Quality Check
- IEAP – Incident Emergency Action Plan
- GN – General Request
- FARA – Floodplain Analysis and Regulatory Assessment
- INFIP- Indiana Floodplain Information Portal 
- BAFL – Best Available Floodplain Layer

1. __IT Project Scope of Work__

The SOI requires IT services for the project described in Section 1, “IT Project Identification” above.

Information Technology services required from the IT Vendor shall include:

The overall requirements of the database system should include the following:

1. The database should be compliant with current IOT software standards and be easily upgraded as standards and software solutions evolve.
2. The database should meet the basic requirements (as detailed below) for the efficient and timely administration of the Division’s programs.
3. The database should meet the IOT security guidelines to protect against data loss and corruption.
	- 
		- 
			- 
				1. A Government-level cloud environment is mandatory for the processing, storage, and transmission of data. All Cloud Service Providers must support the Federal Risk and Authorization Management Program (FedRAMP) accreditation at a High Impact Level.

__NOTE:__ IDNR expects any cloud solution to be hosted in a State of Indiana owned cloud tenant.  Vendors that can’t meet that requirement should provide details as to why they can’t meet those requirements.

- 
	- 
		- 
			- 
				1. The IOT Information Security Framework (ISF) comprises Statewide Policies that apply to all State of Indiana Executive Branch agencies, employees, contractors, vendors, and third-party consultants. By law, the ISF is confidential information. The ISF establishes Statewide Policies to protect State of Indiana information resources and ensure compliance with additional regulations and standards. The ISF aligns with the NIST Cybersecurity Framework and NIST Special Publication 800-53 Rev. 4.

1. The database should be spatially aware to be fully compliant with the Division’s GIS applications (if not a fully GIS database solution).  GIS may be used to input data (from a map) into the system or may receive data as an output of the system (and generate a map).  
2. Vendor must be conversant with ESRI/ArcGIS products.
3. The database should allow for consistency across systems with respect to addresses, waterbodies, political subdivisions (counties, cities, towns, etc.), and other common data elements, where practical.  
4. The database should support queries, both standard and ad-hoc.  Ability to search via various fields.
5. The database should support standardized reports and be adaptable to changing reporting requirements.
6. The system should be able to provide visual dashboards which can be customized by the user.
7. The database should be accessible through a web browser. 
	- 
		- 
			- 
				1. Input screens and windows should be designed for the efficient entering of data (including batch input capability), with a minimum of entry points and clicks.
8. The database should interface with the states single sign on (SSO) interface of Access Indiana. 
9. The database should include a public-facing aspect to allow the Division’s customers to view and download selected data, including protection of deliberative and confidential information.  
10. The system should have a workflow process that includes a queue for internal and external individuals.
11. The system should allow messages and reminders for internal and external individuals to display in the proper queue
12. The system external facing portal should allow input of data and upload of documents from external entities and provide interaction with internal entities. 
13. The database should be able to automate data entry, when practical, from various formats.
14. The database should be able to store and retrieve documents and data files of any type
15. The database should be able to inform users of tasks and timelines and provide a means for communication (internal/external users) needs, through email or a similar notification process.
16. Ability to send mass correspondence or be able to select from a mass list of users and send communication.
17. The system should auto generate a unique customer id number following a sequential specific numbering convention.
18. The system should create workflow ID that is populated and based upon a formula of details from the file (year, sequential number, section, etc.) and should have auto numbering that generates at the beginning of each year and meet formula details (Casefiles may have different criteria)
19. The system should have the ability to generate documents sent to external customers using a defined template. Format needs to be compatible with image upload/download applications like pdf. 
20. The system should have the ability to manage cases (via workflow) including status, multiple reviews (internal and external), correspondence and case comments.
21. The system should have electronic signature capabilities (applied where needed).
22. Ability to provide a variety of status reports, both for individual cases and status summaries.  Also to track and evaluate processing times.
23. Azure Dev Ops will be used for tracking and assigning bugs during each sprint, user acceptance testing (UAT)and post go live and maintenance issues.
24. DNR DOW processes interfaces with external entities as described above. Data interfaces must use an approved data sharing technology at the State of Indiana.
25. When using workflows, users should be able to assign tasks to other users.  
26. The tool should also be able to auto-assign based on certain criteria. 
27. Ability for Individual staff members to see all their assignments from all systems on a summary page.  

31) The ability to enter data from a mobile device also allows information to be searched, uploaded or submitted.  Internal users will be able to search, upload, and submit information with a mobile device. 

32) Provide the ability to interface with State of Indiana payment gateway from the portal that allows an external user to pay for licenses and permits online as well as be able to print and view said licenses and permits

__Notes: __

Please note that this is a small segment of a larger project.  There is an opportunity for the selected vendor to provide support for the remaining phases of this project, depending on performance.   All future iterations will need to connect and interact with these stages and be the same platform selected. 

DNR is developing this in a phased approach and in order of priority and necessity to meet the business needs. Each group’s requirements have been gathered working with internal Subject Matter Experts (SMEs) and divided in a manner that makes sense to the business.  

It is also the expectation of DNR-DOW that the selected vendor shall perform a level of requirements understanding before beginning development

__User stories for requirements are attached.__  

1. __IT Project Deliverables__

The following list identifies the deliverables for the IT services described in Section 3, “IT Project Scope of Work” and for the project described in Section 1, “IT Project Identification” above. The SOI reserves the right to change due dates, in its sole discretion.

DNR requests that the selected vendor 

Specific Modules listed in priority order are as follows:

__GROUP A: __

__ __

1. Water Supply Contract:  Tracks billing and contracts for sale of water from state-financed reservoirs.
	1. Current Status:  Implemented and in production.
	2. Required Features:
		1. Provide for ability to track billing and contracts for sale of water from state-financed reservoirs.  
		2. Ability to input financial data (track billing and contracts for sale of water from state-financed reservoirs) from an external source.  
		3. Administrative ability to add, edit, search and view contract information and billing/payment status; non-administrative level search/view capability only.
		4. Ability to generate “Water Use Report and Invoice” for billing based upon reported water withdrawals.
		5. Capability to generate annual report of revenue for individual/all contracted facilities.
2. Water Rights Case File System: Tracks water rights investigations conducted by WR&U Section.
	1. Current Status:  Implemented and in production.
	2. Required Features:
		1. Provide for ability to track water rights investigations conducted by WR&U Section 
		2. Administrative ability to add, edit, search and view water rights investigation information; non-administrative level search/view capability only.
		3. Casefile ID populated based upon a formula of details from the file (year; county; 3-digit sequential number; GW or SW) 
		4. Query capability to identify previous water rights investigations by owner name, county, address, congressional TRS.
		5. Capability to generate report of annual investigations.
3. Water Use:  Tracks Significant Water Withdrawal Facility (SWWF) registration and water use data.
	1. Current Status:  not fully implemented.
	2. Required Features:
		1. Provide for ability to track Significant Water Withdrawal Facility (SWWF) registration and water use data.
		2. Administrative ability to add, edit, search, and view SWWF registration and water use information; non-administrative level search/view capability only.
		3. System must be compatible with online water use data entry application, must be able to upload water use data from application to database.
		4. Query capability to export historic SWWF registration and water use data.
		5. Capability to produce reports for annual report form mailings as well as data reports for USGS, Great Lakes Commission, annual data reviews, etc.

__GROUP B:  __

1. Well Driller & Pump Installer Licensing:  Tracks WDPI licensees and license status.
	1. Current Status: Implemented and in production.
	2. Required Features:
		1. Provide the ability to track WDPI licensees and license status.
		2. Administrative ability to add, edit, search and view licensee/company information and license status; non-administrative level search/view capability only.
		3. Query capability to identify previous licensing exams and status of individuals through exam date, exam score, license status.
		4. Capability to contact individuals and whole groups via email message.
		5. Capability to generate report of total licensing revenue, number of licensed individuals based on license type, and individuals who are not current on licensing requirements. 
		6. Ability to input financial data (payment status updates) from an external source.
2. Well Logs:  Track water well records submitted to the Division.
	1. Current Status:  not fully implemented.
	2. Required Features:
		1. Provide the ability to track water well records submitted to DOW.
		2. Administrative ability to add, edit, search, and view well log information. 
		3. non-administrative level search/view capability only.
		4. System must be compatible with online well log data entry application, must be able to upload well log data from application to database.
		5. System must be compatible with image upload application.
		6. Query capability to export well log data.
		7. Well log database must live link to water well web viewer for individual well reports.
3. Voluntary Monitoring Network Tracking System:  Tracks and stores data from the Voluntary Monitor Network
	1. Current Status:  Not developed.
	2. Required Features:
		1. Uploading of data from field reporters (instruments)
		2. Cataloging of well sites, including age of equipment, adding, and removing sites
		3. Upload functionality to the USGS Groundwater Watch site.
		4. Ability to track monitoring schedules of individual monitoring wells.
		5. Ability to track data posting dates to the USGS Groundwater Watch site.
4. Public Facing Portal 
	1. Current Status:  Not developed.
	2. Required Features:
		1. Available through web browsers (Chrome, Edge, and Firefox) with latest versions up to date.
		2. Provide visual dashboards displaying relevant information like activities, requirements, notifications and quick links.
		3. Provide a search function with filters and sorting options to make it easier for customer to find items
		4. Provide ability to view and track past requests
		5. Provide Multi Factor Authentication
		6. Single Sign on Interface with Access Indiana for account creation and management
		7. Provide the ability to interface with State of Indiana payment gateway 
		8. Provide customer a confirmation number regarding order processed
		9. Allow users to receive email notifications and alerts
		10. Allow the Division’s customers to view and download selected data, including protection of deliberative and confidential information.
		11. Provide ability for electronic signatures
		12. External entities should be allowed to input data and upload documents and interact with internal entities. 

*The IT Vendor shall notify the SOI of an anticipated delay of any deliverable, as far in advance of the due date as possible.*

*Once the project progresses to within 90 days prior to an upcoming phased or final go-live, the SOI expects the IT Vendor to generate IT status reports and updates more frequently as deemed appropriate by the SOI and IT Vendor to ensure timely and valuable feedback leading up to each project go-live.*<a id="_Toc350351310"></a>

__Training & Documentation:__

- End user and administrator training prior to go live.
- Documentation and user’s manual for staff as a reference guide
	- Documentation can be in an electronic format.
- System Administrator guide for configurable items
- Knowledge transfer session for DNR system administrators at post go live.

# __Evaluation Process and Criteria__

<a id="_Toc350351311"></a>

Proposals will be evaluated based upon the proven ability of the Respondent to satisfy the requirements of the ITCS in a cost-effective manner.

__Summary of Evaluation Criteria:__

__Criteria__

__Points__

1.  Adherence to Mandatory Requirements

Pass / Fail

2.  Management Assessment / Quality (MAQ)

60 available points

3.  Cost (Cost Proposal)

35 available points

4.  Buy Indiana

5 available points

__Total__

__100 available points__

All proposals will be evaluated using the following approach.

Step 1

In this step proposals will be evaluated against Criteria 1 to ensure that they adhere to Mandatory Requirements. Any proposals not meeting the Mandatory Requirements will be disqualified.

Step 2

The proposals that meet the Mandatory Requirements will then be scored based on Criteria 2 and 3 ONLY. This scoring will have a maximum possible score of 95 points. All proposals will be ranked based on their combined scores for Criteria 2 and 3 ONLY. This ranking may be used to create a “short list”. Any proposal not making a “short list” will not be considered for any further evaluation.

*Note*: Step 2 may include one or more rounds of proposal discussions, oral presentations, clarifications, demonstrations, etc. focused on cost and other proposal elements. Step 2 may include a second “short list”.

Step 3

If the State conducts additional rounds of discussions and a best and final offer (BAFO) round which lead to changes in either the MAQ or Cost sections for the listed Respondents, their scores will be recomputed.

The short-listed proposals will then be evaluated based on all the entire evaluation criteria outlined in the table above.

Step 4

The response receiving the highest combined Total score, as outlined in the table above, will receive the award.

The below describes the different evaluation criteria.

__Adherence to Requirements \[Pass / Fail\]__

Respondents passing this category move to Step 2 and the proposal is evaluated for Management Assessment/Quality and Price.

__Management Assessment / Quality \[60 available points\]__

Proposals will be evaluated based upon the proven ability of the Respondent to satisfy the requirements of this Request for ITCS.

__Cost \[35 available points\]__

Cost scores will be normalized to one another, based on the lowest cost proposal evaluated. The lowest cost proposal receives a total of 35 points. The normalization formula is as follows:

*Respondent’s Cost Score = (Lowest Cost Proposal / Total Cost of Proposal) X 35*

__Buy Indiana \[5 available points\]__

Respondents qualifying as an Indiana Company will receive 5 points in this category.

It is the Respondent’s responsibility to confirm its Buy Indiana status for this portion of the process. If a Respondent has previously registered its business with IDOA and wishes to be certified as a Buy Indiana entity, go to [https://www.in.gov/idoa/2467.htm](https://www.in.gov/idoa/2467.htm).

Respondents that have not previously registered with IDOA must go to [https://www.in.gov/idoa/2467.htm](https://www.in.gov/idoa/2467.htm) and follow the steps outlined in the paragraph above to certify your business’ status. The Respondent’s Buy Indiana status must be finalized when the solicitation response is submitted.

__Respondent must clearly indicate which preference(s) they intend to claim (Respondent will only be evaluated on the criteria selected/cited from IC 5-22-15-20.5). Be sure to allow sufficient time to complete this process, at least twenty (20) business days.__

__Defining an Indiana Business:__

“Indiana business” refers to any of the following:

1. A business whose principal place of business is located in Indiana.

(2) A business that pays a majority of its payroll (in dollar volume) to residents of Indiana.

(3) A business that employs Indiana residents as a majority of its employees.

(4) A business that makes significant capital investments in Indiana.

(5) A business that has a substantial positive economic impact on Indiana.

__Substantial Capital Investment__: 

Any company that can demonstrate a minimum capital investment in Indiana of $5 million or more in plant and/or equipment or annual lease payments in Indiana of $2.5 million or more shall qualify as an Indiana business under I.C.5-22-15-20.5 (b)(4). 

__Substantial Indiana Economic Impact__:

Any company that is in the top 500 companies (adjusted) for one of the following categories: number of employees (DWD), unemployment taxes (DWD), payroll withholding taxes (DOR), or Corporate Income Taxes (DOR); it shall qualify as an Indiana business under I.C. 5-22-15-20.5 (b)(5).

__Supplier Response__

All items listed below are mandatory. Supply the requested information in the blue-shaded areas and indicate any attachments that have been included. If they are not included, the proposal may be failed and not further considered.

Proposals must be submitted as a single PDF. __When claiming confidential information, if applicable, the State should receive two PDF documents.__ See the following section for further detail.

__CONFIDENTIAL INFORMATION__

Respondents are advised that materials contained in proposals are subject to the Access to Public Records Act (APRA), IC 5-14-3 et seq., and, after award, the entire Request for Projects Services file may be viewed and copied by any member of the public, including news agencies and competitors. 

Respondents claiming a statutory exception to the APRA must indicate so on a separate attachment labeled “__Confidential Documentation Listing__”. That document should include the following information:

- List all documents where claiming a statutory exemption to the APRA
- Specify which statutory exception of APRA that applies for each PDF
- Provide a description explaining the manner in which the statutory exception to the APRA applies for each document

When claiming confidential information, respondents should submit two versions of their response: 1) a confidential version (for the State’s review and evaluation) and 2) a redacted version (for public records requests).

The State reserves the right to make determinations of confidentiality. If the Respondent does not identify the statutory exception, the Procurement Division will not consider the submission confidential. If the State does not agree that the information designated is confidential under one of the disclosure exceptions to APRA, it may seek the opinion of the Public Access Counselor.

Prices are NOT confidential information.

IT Vendor's response shall be submitted in several parts as set forth below. The IT Vendor will confine its submission to those matters sufficient to provide an adequate basis for the SOI evaluation of the IT Vendor. This response will be incorporated by reference into the final statement of work. The following sections and answers to the following questions should be completed in entirety:

__COMPANY INFORMATION__

1. Official registered name (Corporate, D.B.A., Partnership, etc.), address, and main telephone number.

1. Key contact name, title, address (if different from above address), and direct telephone number. 

1. The person authorized to contractually bind the organization for any proposal against this response and subsequent SOW.

1. Brief history, including year established and the number of years your company has been offering IT Project Services. 

__GENERAL COMPANY PROFILE __

1. Describe your competitive advantage (what sets you apart or your company strength).

1. Describe your experience and expertise on project(s) with similar scope to the project described in Section 1, “Project Overview” above. Explain how you will successfully deliver IT services for this project.

__EXECUTIVE SUMMARY (Please limit to two pages)__

This section will present a high-level synopsis of the IT Vendor’s proposal. The Executive Summary should be a brief overview of the engagement and should identify the main features and benefits of the proposed work. Provide the attachment name in the following response area.

<a id="_Toc508107021"></a>__REFERENCES __

Provide three (3) current corporate or governmental references, including company name, contact name, title, address, telephone number, email address, and client relationship synopsis for similar services.

## __References:__

__Contact Information__

__Duration and Brief Summary of Engagement__

<a id="_Hlk59461276"></a>Company/Entity:  

Contact:  

<a id="_Hlk59459496"></a>Title:  

Telephone:  

Email Address:  

__Contact Information__

__Duration and Brief Summary of Engagement__

Company/Entity:  

Name:  

Title:  

Telephone:  

Email Address:  

__Contact Information__

__Duration and Brief Summary of Engagement__

Company/Entity:  

Name:  

Title:  

Telephone:  

Email Address:  

 

__IT VENDOR RESPONSE AREA__

1. IT Staffing
	1. Provide an overall project organizational chart that includes roles / responsibilities and percent allocation for your team as well as expected roles / responsibilities for the SOI team to help ensure project success.

- 
	1. Provide resumes of each IT staff member identified on your team. For any staff member not yet identified, provide the minimum expected qualifications of the position.

- 
	1. Explain why this resourcing approach will be successful in delivering high-quality IT services.

1. Overall Project Implementation 

__\*NOTE: __*Respond with “N/A” if you believe the question(s) are not applicable and provide a brief statement as to why.*

1. Describe the solution you plan to use to meet the system requirements and identify if the solution is Commercial-Off-The-Shelf (COTS), Platform, Custom, or a combination.

<a id="_Hlk113030857"></a>

1. Explain where your solution has been implemented. Include when the implementation was completed, the solution version used, your project role, project duration, project results, who hosted and supported the solution, how many users access and use the solution, and if the entity is still using the solution.

1. Estimate the overall percentage of mandatory SOI requirements that would (1) be satisfied by current functionality, (2) require configuration only to satisfy, and (3) require some level of customization to satisfy. These three categories should total 100%.

1. Describe in detail your project approach and methodology (Agile, Waterfall, or a combination). 

1. Describe your overall risk / issue management approach and methodology. Include how risks and issues will be identified, prioritized, and communicated throughout the project.

1. Identify and describe 3 to 5 potential key overall project risks given your experience and expertise on projects of similar size, scope, and complexity. Describe how your approach will mitigate those risks to this project. 

1. Provide an example of when you escalated a risk / issue to a client that resulted in measurable value and tangible results.

1. What tools will you use as part of overall project delivery to include development, testing, communications, scheduling, document management, defect management, training, and others?

1. Describe your approach to schedule management for the project. How will you track and communicate schedule performance? Provide an example of a high-level schedule for this project to include tasks that your team will own and State-owned tasks in an integrated fashion.  

1. Describe your approach to communication management for the project. How do you plan to get timely feedback to the SOI? How will you measure communication effectiveness? Provide an example of a high-level communication plan for this project to include who receives what, when, and how.  

1. Describe your status reporting process (format, distribution timeline, distribution methodology, etc.) on projects of similar size, scope, and complexity. Provide an example of a status report.

1. Describe your expectations of the SOI on this engagement. Specifically, what must the SOI provide with respect to the environment, participation, and processes to enable you to be successful on this project?

1. Provide a high-level architectural diagram and associated details of all hardware / infrastructure required for the solution to operate, including backup and disaster recovery. (Number of servers, servers’ specs, OS versions etc... for client and server).

1. Describe your overall security approach for the solution and data to meet the SOI security requirements.

1. IT Organizational Change Management (OCM) 

__\*NOTE: __*Respond with “N/A” if you believe the question(s) are not applicable and provide a brief statement as to why.*

- 
	1. What is your overall approach to OCM on this project? How will you measure organizational readiness throughout the project?

- 
	1. What role will you play in OCM activities for this project? What role do you expect the SOI to play?

- 
	1. What experience and expertise do you have in OCM activities for projects of similar size, scope, and complexity?

- 
	1. Provide a high-level example of your OCM plan from a project of similar size, scope, and complexity that defines the strategy, methodology, and tasks.

- 
	1. What are the key risks / issues that you have faced with OCM activities on previous projects? What mitigation and contingencies did you identify and implement? What effect did your action(s) have on the overall project?

 

1. IT Data Conversion and Migration

__\*NOTE: __*Respond with “N/A” if you believe the question(s) are not applicable and provide a brief statement as to why.*

- 
	1. What is your overall approach to data conversion / migration for this project?

1. What role will you play in data conversion / migration activities for this project? What role do you expect the SOI to play?

1. What experience and expertise do you have when it comes to converting / migrating large quantities of data in different formats and locations?

1. Provide a high-level example of your data conversion plan from a project of similar size, scope, and complexity that defines the strategy, methodology, and tasks.

1. What are the key risks / issues that you have faced with previous data conversions / migrations and what mitigation and contingencies did you identify and put in place? What effect did your action(s) have on the overall project?

1. Do you recommend a specific environment for data conversion / migration activities? Why?

1. Testing 

__\*NOTE: __*Respond with “N/A” if you believe the question(s) are not applicable and provide a brief statement as to why.*

- 
	1. What is your overall approach to testing for this project? Specify the type of testing you expect throughout the project and when. How will your team coordinate and execute testing in a cross-functional team environment?

- 
	1. What role will you play in the various testing activities for this project, including User Acceptance Testing (UAT)? What role do you expect the SOI to play?

- 
	1. What experience and expertise do you have when it comes to testing activities for projects of similar size, scope, and complexity?

- 
	1. Provide a high-level example of your test plan from a project of similar size, scope, and complexity that defines the strategy, methodology, and tasks.

- 
	1. What are the key risks / issues that you have faced with previous testing activities and what mitigation and contingencies did you identify and put in place? What effect did your action(s) have on the overall project?

- 
	1. Do you recommend any automated testing as part of this project? Why or why not? If so, what role will you play in the development and execution of automated testing if any?

- 
	1. Describe how your team estimates testing effort for projects.

- 
	1. Describe your defect management approach, process, and detailed steps to document, prioritize, track, correct, and retest defects found in testing.

- 
	1. What tools and visuals will be available for tracking testing throughput (test executions) and progress (test passing) over time?

1. Training 

__\*NOTE: __*Respond with “N/A” if you believe the question(s) are not applicable and provide a brief statement as to why.*

- 
	1. What is your overall approach to training for this project? Specify the types of training and delivery methods you expect for the various types of project stakeholders to include end users of the solution. How will your team develop and deliver training?

1. What role will you play, the SOI play, in the various training activities for this project?

1. What experience and expertise do you have when it comes to training activities for projects of similar size, scope, and complexity?

1. Provide a high-level example of your training plan from a project of similar size, scope, and complexity that defines the strategy, methodology, and tasks.

1. What are the key risks / issues that you have faced with previous training activities and what mitigation and contingencies did you identify and put in place? What effect did your action(s) have on the overall project?

1. Describe how you will ensure training materials will be kept complete and current throughout the project and beyond.

1. Describe how you determine if training is effective.

1. Cutover and Support 

__\*NOTE: __*Respond with “N/A” if you believe the question(s) are not applicable and provide a brief statement as to why.*

- 
	1. What is your overall approach to supporting the solution after project go-live? What is your plan for heightened support (hyper-care) while the solution is stabilized post go-live? How long will hyper-care last?

1. What role will you play in the support activities post go-live? What role do you expect the SOI to play?

1. What experience and expertise do you have supporting this solution and similar solutions?

1. Provide a high-level example of your support plan and cutover plan from a project of similar size, scope, and complexity that defines the strategy, methodology, and tasks.

1. What are the key risks / issues that you have faced with previous cutover and support activities and what mitigation and contingencies did you identify and put in place? What effect did your action(s) have on the overall project?

1. Describe how you will ensure support staff will be trained and made ready to successfully support the solution.

1. Describe how you will monitor support activities and how you will adjust support as needed.

1. Provide any Service Level Agreements (SLAs) the SOI can expect as part of your support of the solution post go-live.

1. Pricing Summary – Provide your proposed pricing for your solution based on the following Pricing Model.

\* __Note__: *Total Project Costs are not to exceed amount submitted / proposed. Price must be *__*ALL INCLUSIVE*__*, including, but not limited to, any and all travel, delivery costs or destination fees.*

*For Deliverable Pricing, cost is calculated as (IT Vendor Payment \+ (IT Vendor Payment \* .0045)).*

*For Fixed Price, payment is calculated as (IT Vendor Payment \+ (IT Vendor Payment \* .0045)).*

*For Time and Material, Hourly Bill rate is calculated as (IT Vendor Rate \+ (IT Vendor Rate \* .0045)).*

## __Deliverable Pricing:__

- 
	1. Fixed Priced, Deliverable Based Payment Schedule

Update the table with detailed information regarding the deliverables listed below.  The SOI encourages respondents to add deliverables to the list below as deemed appropriate to further elaborate on specific deliverables throughout the project.

__\#__

__Milestone Event __

__Deliverable __

__Schedule __

__Payment __

__Holdback __

__Net Payment __

__Interdependent Deliverable(s)__

__1__

__Kick Off & Discovery __

__SUMMARY LEVEL__

1a

Kick Off Meeting

1b

Project Planning Documents

1c

Comprehensive Schedule

__2__

__Group A as listed above SUMMARY LEVEL__

2a

Group A Functionality delivery pre UAT

2b

Group A Data migration delivery pre-UAT

2c

Group A Successful UAT with all defects closed

2d

Group A Training delivery

2e

Group A Stabilization Hypercare (1 month)

__3__

__Group B as listed above SUMMARY LEVEL__

3a

Group B Functionality delivery pre UAT

3b

Group B Data migration delivery pre-UAT

3c

Group B Successful UAT with all defects closed

3d

Group B Training delivery

3e

Group B Stabilization / Hypercare (1 month)

__4__

__1 Year M&O post Group B Stabilization / Hypercare__

__TOTAL__

