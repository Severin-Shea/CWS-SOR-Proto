---
id: "vdot-traffic-operations-division-virginia-department-of-transpor"
name: "SOR EXAMPLE_OM_17549_VDOT SOR TOSC NOC OM FINAL.docx"
sorType: "Operations & Maintenance"
agency: "VDOT, Traffic Operations Division"
client: "Virginia Department of Transportation (VDOT) — Traffic Operations Division"
date: "2022-08-12"
documentPath: "existingSORDocs/SORdocs/SOR EXAMPLE_OM_17549_VDOT SOR TOSC NOC OM FINAL.docx"
extractedAt: "2025-08-26T09:02:19.281529+00:00Z"
---
# __STATEMENT OF REQUIREMENTS (SOR)__

__SOR \# VDOT-220812-01-CAI__

__ VDOT Traffic Operations Support Center NOC Operations and Maintenance Services__

1. __Date:__  August 12, 2022
2. __Authorized User__:  Virginia Department of Transportation
3. __Authorized User Contact Information:__

*Murali Rao*

*1401 E Broad Street *

*Richmond, Virginia 23219*

Phone:	*[redacted-phone]*

E-mail: 	[[redacted-email]](mailto:[redacted-email]) 

1. __Solicitation Schedule: __

__Event__

__Date__

Release SOR

*08/16/2022*

Supplier Questions Due to CAI

*08/22/2022*

Supplier Response Due

*09/02/2022*

Award Decision

*09/09/2022*

Estimated Project Start Date

*09/19/2022*

1. __Proposal Evaluation__

Supplier’s Response must be submitted in the specified Statement of Work (SOW) format and will be evaluated for format compliance.

Supplier’s Response will be evaluated for technical merit based on its appropriateness to the performance of Authorized User’s requirements, its applicability to the environment, and its effective utilization of Supplier and Authorized User resources.

1. __Project/Service:  __

Traffic Operations Support Center (TOSC) Operations and Maintenance Support Services

1. __Specialty Area: __

 Application Development	  IT Infrastructure

1. __Contract Type:__

Hybrid Model:  Base Fixed Monthly Fee with Optional T&M (Hourly) Component

1. __Introduction :__

__Support Overview__

VDOT is seeking support for its Traffic Operations Support Center (TOSC) Network Operations Center (NOC) providing responsive maintenance to operations technology (OT) assets. This is expected to be a long-term engagement to sustain the OT cybersecurity program through routine and ongoing support. The Agency desires consistency in the ongoing support and minimal staffing turnover to ensure a cohesive and uninterrupted development of operations.

__Current State __

VDOT is currently using Icinga to monitor the availability of Intelligent Transportation Systems (ITS) devices and CalemEAM is integrated with Icinga and is the current service and asset management solution for these devices. ITS device monitoring is supported by an Integrated Service Desk (ISD), also referred to as the ITS Network Operations Center (NOC) which supports the monitoring and asset responsive activities. VDOT also uses its Highway Maintenance Management System (HMMS) as the asset management tool for traffic signals and is largely dependent on sources outside of VDOT for traffic signal anomaly notifications.

__Future State __

VDOT is expanding its monitoring and asset management efforts to include all operations technology (OT) assets. VDOT is implementing the TOSC to support the OT device availability monitoring, OT network device, security monitoring and associated responsive maintenance activities. VDOT is implementing a more comprehensive asset management platform named the Operations Technology Services and Asset Management (OTSaAM). The OTSaAM asset management system will provide VDOT the full range of asset management services to include: inventory, monitoring, change management, status reporting, maintenance tracking, asset operations and maintenance data analysis and asset attribute management. 

The two primary control systems which will ultimately interface with the OTSaAM platform are the Advanced Traffic Management System, or ATMS (OpenTMS) and the Statewide Traffic Signal System, or STSS (KITS). These control systems take in alerts, new device information, and new user information from OTSaAM and export device status, device failures, device type, asset ID, and failed login attempts to OTSaAM.

The TOSC will consist of both the NOC and Security Operations Center (SOC) staff.  The Authorized User has chosen to issue two separate Statements of Requirements for NOC and SOC support Please see additional SOR for Security Operations Center (SOC) Support for additional information. These entities are separately defined; however, they will be co-located to facilitate necessary interaction. SOC and NOC staff will work cooperatively to triage alerts and anomalies and bring them to resolution using VDOT processes and procedures. 

The following are the primary NOC functions of the TOSC:

- TOSC NOC uses device data from OTSaAM to validate authorized devices on the network
- TOSC NOC uses network monitoring tools to monitor the health of the Operations Technology Network and associated devices
- TOSC NOC coordinates responses for ITS/Signal device failures, communication network device failures, fiber cable breaks, etc.
- TOSC NOC responds to anomalies and prioritizes needed actions for Work Orders for maintenance and upgrades

	

The primary tools integrated into OTSaAM and used by the TOSC NOC Operator to accomplish device management and to monitor responsive maintenance activities are:

- Icinga (OT edge device monitoring)
- ClearAsset (OT asset management tool)

OSPInsight (OT fiber network management tool) is used by the TOSC NOC Operator; however, it is not integrated into OTSaAM.

Medco XTWeb (digital key and locks management tool) is also used by the TOSC NOC Operator and is not integrated into OTSaAM.

VDOT will use ClearAsset as the backbone of the OTSaAM asset management platform and will use it to manage all OT devices. ClearAsset is an enterprise asset and maintenance management software to monitor, inventory, track and maintain OT assets across the Commonwealth to reduce costs, enhance safety and improve efficiency. ClearAsset contains an Inventory module and a Trouble Ticket (work order) system to track asset anomalies from notification through resolution.

VDOT needs support for the TOSC NOC and associated OT device management and maintenance services. Other stakeholders include field maintenance contractors who are dispatched to respond to maintenance work orders. Authorized User is in the process of procuring these contract services statewide. TOSC NOC operational support includes monitoring for systems, network and device anomalies. The mission of the TOSC NOC is to help keep secure and maintain all OT devices at a high level of functionality. The TOSC is a 24x7x365 operations center comprised of a network operations center (NOC) and security operations center (SOC) dedicated to actively monitoring and managing all operations technology (OT) network and devices. OTSaAM is comprised of an integration of Icinga and ClearAsset but, will account for all OT device inventory to include:

- Five (5) Traffic Operations Centers IT and network infrastructure and environment
- ITS Field Devices and associated communications network components (e.g., switches, routers, firewalls, etc.)
- Traffic Signal Devices and associated communications network components (e.g., switches, routers, firewalls, UPS, etc.)
- Statewide Communications Network to include wireless, wired, Fiber Plant and network of Dense Wavelength Division Multiplexers (DWDM)
- Statewide cloud-based environment and components - Azure

__Project Management and Organizational Structure__

Oversight of the resulting Scope of Work will be performed by the Traffic Operations Division (TOD) TOSC Manager with support from Subject Matter Experts (SME): Traffic Operations Division Representative and Operations Technology Division Representative. Transportation Systems Strategy Office (TSSO) Representatives will serve as Project Sponsors. See project organization chart below.



1. __Scope of Work:__

This SOR defines the services required by Authorized User in support of the Project/Service.  

__Scope Part A: Base Level Operations and Maintenance Support __

The Supplier will perform recurring support activities as outlined in the chart below.  These activities will define the base level operations and maintenance support which will be provided by the Supplier for a fixed monthly fee. These services are required to be delivered over the entire period of performance.  

__Base Level Support__

- 
	- 
		- 
			- __OT Asset Monitoring__
- Monitors all OT assets, Network activity, operations and performance aspects
- Anomaly diagnostics and triage
- Investigates anomalies using basic troubleshooting methods to determine course of action
- Approves and Assigns work orders (WO) to the appropriate responsible party for responsive maintenance activities
- Confirms anomaly resolution and distributes email notifications accordingly
- Confirms utility locate request from field, and enters into OTSaAM
- Reviews follow-up tickets and escalates tickets to ensure complete resolution
- Provides initial response to anomaly notifications for action and tracks anomaly response activities through resolution
- Receives Utility Locate Requests from VDOT Contractors, generates Work Orders and dispatches field technicians to mark VDOT utilities
- Anomaly Reporting
- Asset Condition and Status Reporting
- Asset Attribute Data Management
- Asset Service Management
- Spare parts monitoring and management
- Asset Inventory Management
	- 
		- 
			- __Evaluates Monitoring Tools __
- Evaluates & coordinates monitoring tools to determine & respond to large outages
- Evaluates ClearAsset and Icinga monitoring tools for needed adjustments and makes recommendations accordingly
- Evaluates OSPInsight and Medco XT Web software tools for needed adjustments and makes recommendations accordingly
- Evaluates utility tools for needed adjustments and makes recommendations accordingly
- Evaluates System Operating Procedures (SOP's) for necessary refinements to improve process efficiency
	- 
		- 
			- __Change Management__
- Participates, reviews and approves NOC related changes processed through the change management process
- Maintains and updates distribution lists for asset responsive maintenance responsible parties
	- 
		- 
			- __Participates in Training__
- Participates in software and monitoring tools training provided by VDOT and updating skills
- Lead Analyst develops job aids for distribution to operators
	- 
		- 
			- __Reporting and Analytics__
- Runs device and network reports as needed to support asset maintenance analysis and reporting
- Generates Ad-Hoc Reports
- Logs and analyzes all applicable tasks, requests for information and miscellaneous information gathered during a given shift
- Provides operations level and management level data management and reports including cost reports, purchases, asset deployments, transfers, repairs, disposals and assets out for repair
- Provides life-cycle analytics
- Provides performance reports of maintenance outside contractors’ responsive maintenance activities
- Provides Service Level Agreement data analytics and reporting for the device maintenance contracts 
	- 
		- 
			- __Application Help Desk Support__
- End User Call Support
- Application Level Security Administration (Add/Disable access for system users)
- End User Help and Training
- End User guidance on frequently used resolutions or work arounds
- Request type identification, classification, and prioritization
- Problem identification
- Problem resolution coordination
	- 
		- 
			- __OTSaAM System Level Support__
- Periodic Database backups
- Period log file clean up
- Database reorganization/re-indexing
- Review and manage system memory
- Disaster Recovery restoration
- Backups
- Monitoring of system performance
- Minor system upgrades due to fixes or end of life (EOL) issues 
- Process and system documentation 
- Review / analyze system health 
- Schedule needed system updates (upgrades, patches, etc.)
- Maintains and updates systems operating documents (Standard Operating Procedures)
	- 
		- 
			- __Utilize the OTSaAM tool to Analyze Field Device Anomalies (Break/Fix Analysis)__
- Root Cause Analysis (RCA)
- Defect resolution
- Service Failure Resolution
- Help Minimize Downtime 
- Help Maximize Time between Failures
	- 
		- 
			- __OTSaAM Data Maintenance__
- Updates the identified software and monitoring tools’ data to correct data issues caused by application defects/failures and/or user error
- Maintains ClearAsset data accuracy and updates
- Maintains performance data for VDOT OT maintenance contractors 

__Base Level Support: Monthly Cap on Hours__

Supplier will provide TOSC NOC support 24X7X365.  As the TOSC is a new implementation, VDOT has projected anticipated work volumes based upon historical current state ITS NOC activities. Past NOC performance is no guarantee of future TOSC activity levels. Projected future TOSC NOC activity levels are indicated in the table below. Based upon anticipated work volumes, respondents will make staffing level recommendations within the following guidelines: 

- Minimum of (1) TOSC Supervisor or Lead NOC Operator for 24 hours a day (7 days/week)
- Minimum of (1) additional Level 1 or Level 2 NOC Operator 24 hours a day (7 days/week)
- Maximum of (6) NOC operations staff on shift at any time
- Full time Data Analyst Position (40 hours per week)



VDOT and Supplier will agree to the baseline staffing levels prior to SOW execution.  Changes in the required staffing levels after the project commences, if required, will be addressed via a Change Order to the SOW.

__Base Level Support: Agency Processes and Standards__

The VDOT Project Manager will provide oversight of the TOSC processes and not directly assign and manage tasks. Supplier TOSC Manager will assign and manage workload and day-to-day tasks which will be communicated verbally and via email to staff and others.  Once the VDOT OTSaAM system is in production, it will generate work orders to be received, triaged, tracked, dispatched and monitored by Supplier staff which will drive work efforts.

__Base Level Support: Deliverables__

__Deliverable Name__

__Definition and Acceptance Criteria__

Quarterly TOSC Performance Assessment

Assessment and Summary Report of NOC metrics:

- asset up-time assessment (edge devices, network, software tools)
- security threat report
- recommendation of efficiency improvements
- anomaly/incident response time assessment

Monthly Status Report

- summarization of accomplishments to date by month as compared to the project plan
- roll-up of weekly reports of accomplishments
- report of all notable trends, open issues or questions regarding the project
- update of longer-term action plan for addressing open issues or questions
- outlook of any changes in tasks, resources or schedule with new target dates, if necessary
- potential impacts on the project; risk management reporting
- report of supplier performance

Weekly Staffing Schedule

Schedule of staff shifts submitted one week in advance of actual shift dates and times

- Indicates a schedule of persons to work by shift for the succeeding week
- Indicates a schedule of person to work by position title for the succeeding week
- defines shift times, dates and duration
- indicates any required overtime hours by personnel

Asset Issues Report

Report of notable asset performance and/or life-cycle issues

- Includes exceptional downtime of any asset (high or low)
- Includes unusual failure rates of assets (high or low)
- Other asset reporting aspects as required

Preventive Maintenance Completion Report

Report of OT asset preventive maintenance completion compared to planned schedule

- Reported by district
- Reported by asset type

Innovative Data Use Recommendation and Summary

Report of innovative recommendations for the use of asset maintenance and activities data

Operational availability of OTSaAM application

Assessment and report of OTSaAM system uptime

Training Plan

Deliver Training Plan for proposed staff to include VDOT and industry required training and certification currency

Staffing Plan

Deliver a plan to be updated quarterly detailing the staff provided by position with qualifications, experience and certifications. Provide staffing levels recommended by shift and total number of staff by position.

Monthly Inventory Reporting

Report of asset inventory data from the OTSaAM inventory database to include:

- ITS device inventory levels and usage by device and by district
- usage rates and restocking recommendations by device and by district
- devices transferred out of inventory
- devices out for repair
- device Purchases 
- deployments and repairs, 
- asset Disposals
- other aspects of asset inventory

Data Management Plan

Deliver Plan for managing, storing, protecting, and archiving data collected and monitored by the TOSC

- asset data
- anomaly data
- security incident data
- TOSC performance data
- responsive maintenance contractors’ performance data
- any other types of data associated with the TOSC

Ongoing monitoring and device management tasks and tracking will be managed through the suite of tools:

- ClearAsset
- Icinga
- OSPInsight (not integrated into OTSaAM)
- XTWeb (not integrated into OTSaAM)
- ATMS (future interface with OTSaAM)
- KITS (future interface with OTSaAM)

__Scope Part B:  Optional Time and Materials Support Services (Check One):__

      No additional T&M services outside of the base level support will be needed

<a id="_Hlk111119402"></a><a id="Check1"></a>   Authorized User requires additional T&M support services as defined below. 

Network and device monitoring and management operations support activities that fall outside of the scope of the pre-defined base level support will be delivered on a Time and Materials (T&M), or hourly basis. The Supplier will bill for actual hours worked at a single blended rate for all resources.  The Supplier will propose the blended rate in their response.

__Scope of T&M Services:__

Additional network and device monitoring and management operations support activities that fall outside the pre-defined base level support activities could include (but is not limited to) the following:

- Large scale or statewide incident response beyond the scope of the pre-defined base level support,
- Additional ad-hoc data analysis and reporting of OT assets that is not covered under the base level support activities,
- Other specialized network and device monitoring and management actions not covered under the pre-defined base level support.

__Documentation Requirements for T&M Services:__

Documentation and other artifacts required for optional time and materials support services will be defined by the authorized user prior to initiating the optional time and materials support service request.

1. __Period of Performance:__

The period of performance for TOSC operations and maintenance services shall be twelve (__12) months.  __The Authorized User may elect to extend the services for additional__ twelve (12) month periods, __but the total maximum term for a SOW and any extensions thereto may not exceed three (3) years.  The price of the fixed monthly fee for the base level services for the renewal period shall not increase by more than five percent (5%) over the base price of the original SOW.  

1. __Place of Performance__ (Check one)__:__

 Authorized User’s Location		­­­­­­­­­­

  Supplier’s Location			

  Authorized User’s and/or Supplier’s Location

Support services will be provided from Authorized User’s office in downtown Richmond. The team will work on-site with ability to work remotely as required by the Authorized User. Normal office safety protocols and procedures are expected to be followed by Supplier and Supplier staff. 

1. __Project Staffing__
2. __Supplier Personnel:__

	The roles listed in the table below represent the minimum Supplier personnel requirements for this engagement. The Supplier shall provide resumes for all proposed personnel.

__Role__

__Key Personnel (Y/N)__

__Years of Experience__

__Certifications__

__References Required (Y/N)__

TOSC Supervisor

Y

5

BS Computer Science, BS Engineering or other IT-related field, or equivalent combination of IT or Cyber certifications and experience; knowledge of performing IT security operations or network engineering experience

N

Operator Level 1

N

2

AS Degree in a related field (CS, IT, Network Security, etc.) or higher certification; 1-2 years of IT, systems administration, or network engineering experience

N

Operator Level 2

Y

3

AS Degree in a related field (CS, IT, Network Security, etc.) or higher certification; MCSE, CCNA, RHCE, etc.; IT systems administration, or network engineering work experience 

N

Data Analyst

    

1. __Authorized User Staff:__

The roles listed in the table below represent Authorized User’s staff and the estimated time each will be available to work on the project. The figure below indicates the Authorized User’s organizational management structure for this project.

__Description__

__% Project Availability__

Director TSSO

Program Sponsor

5

Deputy Director OTSS

Program Sponsor

10

TOSC Manager

Project Manager

50

Traffic Operations Representative

SME – Traffic Engineering/Operations

20

Operations Technology Representative

SME – Statewide Network

20

1. __Milestones and Deliverables:__

The minimum required milestones and deliverables, and the estimated completion date for each deliverable, are listed in the following table.

__\#__

__Milestone__

__Event(s)__

__Deliverable(s)__

__Estimated Completion Date	__

1

Staffing Plan

Deliver staffing plan to include proposed staffing by shift and total number of staff. Indicate historical staffing trends and levels required to meet work demands, needed future adjustments necessary and any recommendation of needed changes to staff qualifications or training.

30 Days after Award and updated Quarterly thereafter

2

Data Management Plan

Deliver Plan for managing asset and inventory data 

30 Days after Award

3

Training Plan

Deliver Training Plan for proposed staff to include VDOT required training and certification currency

30 Days after Award

4

Deliver Quarterly TOSC Performance 

Provide a Status Report of

TOSC Performance and Update SOP to include trouble ticket workflow details

September 30, 2022

December 31, 2022

February 28, 2023

May 31, 2023

5

Inventory Reporting (4-5 per year)

Supply a report of current inventories supporting the OT asset management. Provide analysis of inventory usage and turn-over rates etc.

September 30, 2022

December 31, 2022

February 28, 2023

May 31, 2023

6

OTSaAM Availability

Assessment and report of OTSaAM system uptime and availability. Assessment of system performance to include recommendations for improvements.

September 30, 2022

December 31, 2022

February 28, 2023

May 31, 2023

7

Monthly Status

A report of project status to included monthly accomplishments to date as compared to the project plan and

all open issues or questions regarding the project. Report is a roll-up of weekly status reports. Report contains an action plan for addressing open issues or questions, any changes in tasks, resources or schedule with new target dates, if necessary

potential impacts on the project; risk management reporting

Monthly

8

Asset Anomalies

Report of notable asset performance and/or life-cycle issues to include exceptional downtime (high or low) of any asset and unusual failure rates of assets and any other asset reporting aspects as required

Monthly

9

Preventive Maintenance

Report of OT asset preventive maintenance completion compared to planned schedule by district and by asset type

November 30, 2022

April 30, 2023

10

Deliver Staffing Schedule

Provide schedule of planned staffing by shift and position vs. provided staffing (week prior), personnel changes, staffing issues

Weekly

11

Recommendations of Data use efficiencies

Provide recommendations in a written report on Data use efficiencies and Innovative Data uses

September 30, 2022

December 31, 2022

February 28, 2023

May 31, 2023

The Supplier should provide all deliverables in electronic form, using the following software standards (or lower convertible versions):

__Deliverable Type__

__Format__

Monthly Status Reports

PDF, MS Word or compatible

Monthly Staff Schedules

PDF, MS Word or compatible

1. __Travel Expenses __(Check one)__:__

No travel expenses are anticipated for this project. No travel is required, and travel expenses are not included in the fixed price.

1. __Payment:__

Payment for fixed price monthly support services will be based on successful completion and acceptance of deliverables.  Payment for additional T&M support services will be based on actual hours worked and approved by Authorized User.

1. __Acceptance Criteria:__

The Authorized User Project Manager will have ten *(10)* business days from receipt of the deliverable to provide Supplier with the signed acceptance receipt.

Final acceptance of services provided under the SOW will be based upon acceptance of monthly deliverables for base level support and approval of hours worked in accordance to staffing schedule.

1. __Project Roles and Responsibilities: __

__Responsibility Matrix__

__Supplier__

__Authorized User__

Monitor all OT assets operations and performance

X

Complete monthly deliverables

X

Evaluate OT asset monitoring tools

X

Investigate OT Asset and systems anomalies

X

Confirm Utility Locate Requests

X

Runs Reports to support maintenance analysis

X

Approve Schedules

X

Approve Monthly Deliverable

X

Systems and database administration

X

Desktop support and administration

X

1. __Criminal Background Checks and Other Security Requirements __(check all that are required):

*  *Standard CAI Required Background Check

<a id="_Hlk111118699"></a>*  *Agency Specific Background Check – VDOT fingerprinting

1. __Reporting__:

*  *  __Weekly Status Update__:

The weekly status report, to be submitted by Supplier to Authorized User, should include accomplishments to date as compared to the project plan; 

- 
	- all open issues or questions regarding the project;
	- action plan for addressing open issues or question;

 *  *__Other(s) __(Specify) Monthly status report detailing support activities

- 
	- accomplishments to date as compared to the project plan; 
	- all open issues or questions regarding the project;
	- action plan for addressing open issues or question;
	- any changes in tasks, resources or schedule with new target dates, if necessary; 
	- potential impacts on the project; risk management reporting. 
	- Report of anomalies 
	- Ad-hoc reports of 

1. __Federal Funds __(Check one):

*  *Project will be funded with federal grant money 

*  * No federal funds will be used for this project

1. __Training and Knowledge Transfer:__

Supplier will need to observe existing TOSC operations for a period of 30 days to transfer knowledge of current operations. Orientation and training on the OTSaAM environment and use of Icinga, ClearAsset, XTWeb and OSPInsight tools will be required.  Supplier staff will need to be informed/trained on any VDOT processes/procedures/tools associated with performing the assigned tasks to ensure proper response and escalation of issues. Supplier training is included in monthly costs.

1. __Additional Terms and Conditions:__

The services to be provided are subject to the following additional provisions:

1. Effective July 1, 2020, the Code of Virginia requires contractors with the Commonwealth who spend significant time working with or in close proximity to state employees to complete sexual harassment training.  As a result of the new code, VITA and the Department of Human Resource Management (DHRM) are requiring that all contractors working through the CAI contract complete DHRM's "Preventing Sexual Harassment" training.  This training is available as either a short video or a written transcript on the DHRM website: [https://www.dhrm.virginia.gov/public-interest/contractor-sexual-harassment-training](https://www.dhrm.virginia.gov/public-interest/contractor-sexual-harassment-training). The selected Supplier must agree that any assigned resource will complete the training.
2. The selected Supplier must agree that any assigned resource will review and conform to the IT Contingent Labor Program (ITCL) Contractor Code of Conduct.  The Code of Conduct can be reviewed on VITA’s website at the following link:

[https://www.vita.virginia.gov/media/vitavirginiagov/supply-chain/pdf/Contingent-Worker-Code-of-Conduct.pdf](https://www.vita.virginia.gov/media/vitavirginiagov/supply-chain/pdf/Contingent-Worker-Code-of-Conduct.pdf)

1. __Scheduled Work Hours:__

The TOSC is a 24X7 operations facility. The Supplier will provide continuous operations support activities. 

1. __Facility and equipment to be provided by Authorized User:__

Support services will be provided from Authorized User’s office in downtown Richmond. The team will work on-site with ability to work remotely as required by the Authorized User. Authorized User to provide all equipment necessary to perform the services required.

