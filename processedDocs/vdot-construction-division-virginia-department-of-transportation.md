---
id: "vdot-construction-division-virginia-department-of-transportation"
name: "SOR EXAMPLE_APP DEV_18184_VDOT SOR CNSP Program FINAL.docx"
sorType: "Application Development"
agency: "VDOT, Construction Division"
client: "Virginia Department of Transportation (VDOT) — Construction Division"
date: "2024-03-08"
documentPath: "existingSORDocs/SORdocs/SOR EXAMPLE_APP DEV_18184_VDOT SOR CNSP Program FINAL.docx"
extractedAt: "2025-08-26T09:02:13.840677+00:00Z"
---
Contract Number *(VA-210625-CAI)*

Contents

[__STATEMENT OF REQUIREMENTS (SOR)__	2](#_Toc283151016)

# <a id="_Toc283151016"></a>__STATEMENT OF REQUIREMENTS (SOR)__

__SOR \# VDOT-240308-01-CAI__

__VDOT Copied Note Special Provisions Program__

1. __Date:__ March 8, 2024
2. __Authorized User__: Virginia Department of Transportation 
3. __Authorized User Contact Information:__

*Priya Saldanha, Assistant Division Administrator*

*1401 E. Broad Street *

*Richmond, VA 23219*

Phone: [redacted-phone]

E-mail: [redacted-email]

Fax: [redacted-phone]

PLEASE NOTE:  ALL questions related to this SOR should be directed to the CAI Account Manager. Suppliers may NOT contact the Authorized User.

1. __Solicitation Schedule: __

__Event__

__Date__

Release SOR

March 12, 2024

Supplier Questions Due to CAI

March 19, 2024

Authorized User Responds to Questions

March 26, 2024

Supplier Response Due

April 9, 2024

Award Decision

May 7, 2024

Estimated Project Start Date

May 20, 2024

1. __Evaluation and Scoring__

Supplier’s Response will be evaluated for technical merit based on its appropriateness to the performance of Authorized User’s requirements, its applicability to the environment, and its effective utilization of Supplier and Authorized User’s resources.

1. __Project/Service: __

Copied Note Special Provisions Program

1. __Specialty Area __(Check one)__: __

  Application Development

  Information Security

  Business Continuity Planning

  IT Infrastructure

  Business Intelligence

  IT Strategic Planning

  Business Process Reengineering

  Project Management

  Enterprise Architecture

  Public Safety Communications

  Enterprise Content Management

  Radio Engineering Services

  Back Office Solutions

  IV&V Services

  Geographical Information Systems

	

1. __Contract Type: Fixed Price, Deliverable-based__
2. __Introduction:__

Project History

The VDOT Construction Division is responsible for creating contract proposals for approximately 400 new projects each year. Each proposal can be hundreds of pages. It is a critical step in the process to launch a new construction project. Today, staff members from Central Office as well as from the Districts access what is known as the CNSP (Copied Notes Special Provisions) software system to select and gather construction specifications then build proposals for a given project.  This MS Access application builds 100% of the draft proposals when used.   When it is working correctly, the application saves a lot of manual work and time to create a draft contract proposal.

Business Need

The CNSP system is outdated, unreliable, and causes a lot of rework in a time sensitive process. Construction estimates that 40% of attempted builds fail during the process, resulting in rework.  When downtime and rework is significant, it can result in delays to projects achieving the scheduled advertisement date. CNSP is homegrown by Construction and there is no built-in IT support for repairs or maintenance. This system needs to be replaced with a solution that will provide the same functionality but will function as designed without issues.  

Project Complexity

This project is Low Risk and Low Complexity. 

Project Management and Organizational Structure

The VDOT Project Manager and the Supplier Project Manager are the main VDOT points of contact and are responsible for day-to-day management of the application solution.

More Specifically:

1. Supplier shall appoint a project manager.
2. The Supplier project manager shall report to the VDOT project manager.
3. VDOT project manager shall escalate issues needing Supplier attention to the Supplier project manager, who will escalate within Supplier’s organization as needed.
4. Supplier project manager shall copy the VDOT project manager on all communications with VDOT staff.
5. __Scope of Work:__

This SOR defines the services required by Authorized User in support of the Project/Service. 

In Scope:

- Supplier will provide the following services:
	- Create replacement CNSP application using Microsoft Dynamics 365 as the application platform.
	- Provide information regarding license types and quantity count for the intended solution.
	- Configure Dynamics 365 to provide all functionality required; no custom development is desired outside of native power platform functionality.
	- Configure every aspect needed for the final delivered solution including security, user profiles, etc. 
	- Utilize the VDOT Dynamics 365 development and test environments.
	- Develop the use cases, user stories, user acceptance test cases and acceptance criteria for testing the new CNSP application, and coordinate user acceptance testing with end user testers.
	- Work with VDOT infrastructure personnel to deploy the new CNSP application in VDOT’s Dynamics 365 environment.
	- Follow VDOT standards described in the Enterprise Architecture Supplemental Statement of Requirements attachment.
	- Provide one to three months post-production support.  Suppliers should propose the support period in their SOW response.
- Supplier will provide status updates at a weekly project team meeting to be scheduled by Authorized User, to include status reviews and/or reports describing the release progress, daily/weekly accomplishments, and upcoming tasks for the next reporting period, risks, issues, dependencies, and any other information the Supplier feels is necessary to represent the status of the project.
- The Authorized User’s external SharePoint site will be utilized for document management in support of implementation. 
- Quality metrics shall be provided by the Supplier, to include, but not limited to:  
	- Performance Measurement and Reporting – The Supplier will communicate overall project status, technical issues and accomplishments, schedule performance, cost and schedule issues, and corrective action plans, as appropriate or directed by Authorized User.
	- Testing - The Supplier will communicate number of test cases created, number of test cases executed, number of defects reported, number of defects remediated, and percentage of test cases passed for the System Integration Test and User Acceptance Test.

See VDOT’s Enterprise Architecture Supplemental Statement of Requirements document referenced in the Appendix for VDOT policies, standards, and documentation requirements for application development. 

Functional Requirements

The CNSP application is used to create a new draft proposal, triggered when all the pertinent information is available to begin the process and a project is identified as being included in an upcoming ad.  The current process steps are:

1. Select the “Contract Type”.
2. Use the data from pre-construction to generate the “Merge” form.
3. Click on the “Update Document Listing” button (if that had not been updated within the past several days).
4. Select which “Copied Notes” and “Special Provisions” items to be appended to the proposed contract by utilizing pick list items.
5. Save the data entered and the items picked.
6. Press the “Build” button.
7. Fix formatting issues and add remaining items to the contract proposal to complete the process.

See the final Business Requirements document, detailed requirements matrix (user stories & acceptance criteria), and embedded documents listed in the Appendix for additional details.  

Technical Requirements

VDOT is looking for a Supplier to implement Dynamics 365 for a currently manual / Access-driven process.

Current State Diagram



In short, the business uses Access and VBA to help assemble a collection of Word documents that are stored in SharePoint Online. These documents are ordered and indexed (non-numbered) by the VBA script, which exports a compiled Word document. After performing any needed edits to the Word document, the user exports the document as a pdf and appends any other pdf attachments.

Our desired future state is to transition this to Microsoft Dynamics 365 and use native Dynamics functionality.

Future State Diagram



Our suggested solution path is described as follows: The user initiates document creation in 365 Dynamics. The first 10 or so pages of the document are standard and will be transcribed from Word to 365 Dynamics Forms, or any other standardized format. 365 Dynamics will prepopulate certain fields and export a Word document into a new SharePoint Online (SPOL) folder for the entire collection of documents. The user will copy into the SPOL folder the additional Word and pdf documents (some coming from VDOT divisions over which they do not have control). They will make any desired edits to the individual files. Using a Power Automate workflow, the SPOL documents will be ordered by type using pre-defined logic, and a Word file will be generated which contains a table of contents of the individual documents. The table of contents will include Word files and PDFs. The numbering is important for the Word files, they come before the PDFs. The table of contents can use a placeholder for the PDF page numbers. Then the user will request that 365 Dynamics index and compile the documents. After this, each file can be automatically exported to pdf and appended. All edits will happen to the individual files before they are appended.

A Microsoft Dynamics 365 Fit/Gap Analysis was previously completed by a Microsoft Architect using the Detailed Software Requirements (User Stories and Acceptance Criteria) and is provided as an attachment.  The Fit/Gap analysis supersedes where there are differences with the functional requirements. 

We may eventually decide to add a future enhancement which integrates with certain VDOT databases, however, for now, the desired state is stand-alone from any other application.

That said, we would like to prepare the environment to possibly create a complementary application in the same environment in the future. This would include making security groups and roles that are specific to this application (among other things).

We are open to third party connectors but would prefer a solution that does not use them.

__PLEASE NOTE: VDOT has provided a numerous number of attachments to help Suppliers responding to this SOR.  Please email Christy Butcher at CAI (__[[redacted-email]__](mailto:[redacted-email])__) to receive the zip file containing these attachments.  __

1. __Period of Performance:__

Delivery of all products and services defined in the Statement of Work will occur within 6 months of project execution date. 

1. __Place of Performance__ (Check one)__:__

  Authorized User’s Location		

  Supplier’s Location			

  Authorized User’s and/or 		

       Supplier’s Location (see below explanation)

Authorized User will not provide any facilities or equipment for this SOR.  Supplier resources will work remotely in the cloud using virtual desktops provided by Authorized User. Supplier will request Commonwealth of Virginia accounts for identified resources.  These resources will be subject to backgrounds checks.  All Supplier resources must be individuals subject to United States law and be located within the continental United States.  Non-United States resources are not permitted.  VDOT may request onsite presence by key personnel as needed.

1. __Project Staffing__
2. __Supplier Personnel __(Check One)__:__

	The roles listed in the table below represent the minimum Supplier personnel requirements for this engagement. The Supplier shall provide resumes for all proposed personnel.

__Role__

__Technical__

__Skills Required__

__Years of Experience__

__Certifications__

__Required __

__References Required__

__(Y/N)__

    Supplier shall propose the roles and skillsets of the resources needed to deliver the scope of work as defined in this SOR. Supplier shall provide resumes for all proposed personnel.

PLEASE NOTE:  The use of offshore resources for any SOW is prohibited.

1. __Authorized User Staff__

The roles listed in the table below represent Authorized User’s staff and the estimated time each will be available to work on the project.

__Role__

__Description__

__% Project Availability__

Project Manager

Management of supplier engagement

100%

Subject Matter Experts

Provide business knowledge and expertise

25%

Infrastructure Personnel

Assist supplier in establishing environments needed at VDOT

As needed

Operations Personnel

Assist supplier in deployment of application, etc. needed at VDOT

As needed

1. __Milestones and Deliverables:__

The minimum required milestones and deliverables, and the estimated completion date for each deliverable, are listed in the following table.  

__\#__

__Milestone__

__Event(s)__

__Deliverable(s)__

__Estimated Completion Date	__

1

Kickoff meeting

Project management charter, schedule, project approach

2

Time-boxed Sprints

Incremental delivery of functionality

3

User Acceptance Testing 

User testing of functionality provided

4

Final Application Acceptance

Signoff on functionality by the business

5

Post-Production Support

Support beyond the delivery of the functionality

The Supplier should provide all deliverables in electronic form, using the following software standards (or lower convertible versions):

__Deliverable Type__

__Format__

Text Document

Microsoft Office 365 or compatible

Spreadsheets

Microsoft Office 365 or compatible

Presentations

Microsoft Office 365 or compatible

Project Management

Microsoft Office 365 or compatible

Code and/or Scripts

Microsoft Team Foundation Server entry (additional files attached as needed)

Test Scripts

Microsoft Team Foundation Server entry (additional files attached as needed)

1. __Travel Expenses__

<a id="Check1"></a>  Supplier travel expenses, if required, must be included in the total fixed price of the solution.

__PLEASE NOTE:  While VDOT is assuming remote work, we may request onsite presence by key personnel as needed.  Since travel must be included in the fixed price, respondents to this SOR should provide assumptions in their SOW responses for how much travel has been included in the fixed price.  __

1. __Payment __(Check all that apply)__:__

  Payment made based on successful completion and acceptance of deliverables

  All payments, except final payment, are subject to a *(XX)*% holdback

1. __Acceptance Criteria:__

The Project Manager will have 5 business days from receipt of each deliverable to provide Supplier with the signed acceptance receipt.

Final acceptance of services provided under the SOW will be based upon (Check one):

  User Acceptance Test

Acceptance Criteria for this solution will be based on a User Acceptance Test (UAT) designed by Supplier and accepted by Authorized User. The UAT will ensure that all of the functionality required for the solution has been delivered.  The Supplier will provide the Authorized User with a detailed test plan and acceptance checklist based on the mutually agreed upon UAT plan.  This UAT plan checklist will be incorporated into the SOW.

  Final Report

Acceptance criteria for this solution will be based on a final report.  In the SOW, Supplier and Authorized User will agree on the format and content of the report to be provided to Authorized User for final acceptance.

  Acceptance of all individual deliverables

1. __Project Roles and Responsibilities:__

__Responsibility Matrix__

__Supplier__

__Authorized User__

Project Management, Planning and Requirements Elicitation & Development. to deliver agreed upon documented scope

ü    __ __

ü    __ __

Solution Design 

ü    __ __

ü    __ __

Develop test cases

ü    __ __

   

Unit Testing

ü  

   

User Acceptance Testing

  __ __

ü    __ __

Transition and Deployment to Prod

ü    __ __

ü    __ __

UA Tester and Train-the-Trainer training

ü   

Create and deliver training and documentation for end users

__ __

ü    __ __

Post implementation Warranty Services

ü     

    

1 to 3 months Production Maintenance and Support for the immediate post-deployment period 

ü     

      ü   

On-going Production Maintenance and Support in the post-deployment period

ü   

Provision the MS Dynamics 365 platform

ü   

Provide Supplier with access to network and development, and test environment access

__ __

ü    __ __

Local network access Authorized User premises

__ __

ü    __ __

Server Hardware

 

ü     

Server Operating

 

ü     

Server Network Connectivity

 

ü     

Installation, configuration and user provisioning of Microsoft Team Foundation Server environment 

__ __

ü    __ __

Installation, configuration and user provisioning of SharePoint Team site 

__ __

ü    __ __

Server Modules – Installation and Implementation

__ __

ü    __ __

PC Workstations – Hardware, OS (as needed)

ü    

   __ __

PC Workstations – Client Software (as needed)

ü    

ü    __ __

Keyboard, Mouse, Monitor on Supplier Premises

ü   __ __

__ __

Problem Tracking

ü   __ __

ü    __ __

Troubleshooting – IT Infrastructure

__ __

ü    __ __

Troubleshooting – Solution

ü   __ __

__ __

Troubleshooting – Supplier network and premise equipment

ü    __ __

ü     

1. __ Criminal Background Checks and Other Security Requirements (__Check all that are required):

*  *Standard CAI Required Background Check

*  *Agency Specific Background Check – VDOT fingerprinting

1. __Performance Bond __(Check one)__:__

  Required for *(XXX)*% of the SOW value

  Not Required

1. __Reporting __(Check all that are required):

  __Weekly Status Update__ 

The weekly status report, to be submitted by Supplier to Authorized User, should include: accomplishments to date as compared to the project plan; any changes in tasks, resources or schedule with new target dates, if necessary; all open issues or questions regarding the project; action plan for addressing open issues or questions and potential impacts on the project; risk management reporting. 

  __Other(s) __(Specify)

1. __Federal Funds __(Check one):

  Project will be funded with federal grant money 

  No federal funds will be used for this project

1. __Training and Documentation:__
2. __Training is:__

  Required as specified below

  Not Required

Training Requirements:

Supplier will provide training to end user acceptance testers and end user trainers on the implemented technical solution to Authorized User designated personnel for the architecture built through this effort. VDOT anticipates training for no more than 15 people.

1. __Documentation is:__

  Required as specified below

  Not Required

Documentation Requirements:

- High level design document that includes details of foundation components of the system 
- Other technical documents as described in the EASSOR.
- Documents that provide instructions on how to operate the system, including an Operations Manual.
- System maintenance guide describing any ongoing maintenance tasks needed to keep system operating correctly
- Testing scripts documented within Microsoft Team Foundation Server environment
- Release note documentation as needed to support delivery of each sprint build as well as final implementation details.  
	- Implementation documentation to include table and field level “Create” and “Back-out” scripts for Database as well as requirements for implementation, release levels, etc.
	- Release documentation regarding what stories and functions are included in each release with a final release document describing all functions included.
- Sprint Plan detailing expected stories to be completed
- Sprint demo detailing functions and stories associated with each demo
- Use cases associated with each function delivered
- Weekly status report
- All configuration deliverables code and configurations will be checked into Authorized User’s Microsoft Team Foundation Server (TFS) environment. Developers will check deliverables in and out daily unless otherwise agreed with Authorized User.
- Defects will be tracked in a SharePoint list for defects found by users.  Defects are tracked in TFS when assigned to developers for remediation.
- Supplier must adhere to the stated process, documentation, and other deliverables as stated in the agreement. 

1. <a id="_Toc443504637"></a><a id="_Hlk139809095"></a>__Instructions Regarding Freedom of Information Act and Public Availability/Inspection of Records __

<a id="_Hlk129901350"></a>Authorized User reserves the right to use, copy, and reproduce all submitted documents, data, and other information in any manner Authorized User may deem appropriate in evaluating the fitness of the solution(s) proposed, and in complying with applicable law.  All data, materials, and documentation originated and prepared for Authorized User shall be subject to public inspection in accordance with the *Virginia Freedom of Information Act*. 

Consistent with the Code of Virginia, Authorized User will, as permitted by law, hold confidential trade secrets or proprietary information that is submitted by a Supplier in connection with the transaction contemplated by this SOR if the Supplier, to Authorized User’s satisfaction:

1. invokes the protections of the Code of Virginia in writing prior to or upon submission of the data or other materials, 
2. identifies specifically the data or other materials to be protected, and 
3. states the reasons why protection is necessary.

__FAILURE TO COMPLY WILL RESULT IN THE DATA OR OTHER MATERIALS BEING RELEASED TO SUPPLIERS OR THE PUBLIC AS PROVIDED FOR IN THE VIRGINIA FREEDOM OF INFORMATION ACT. __

The Supplier will use this form to identify the information that they deem trade secrets or proprietary information. __The designation of an entire proposal or SOR as proprietary or trade secret is not acceptable, and pricing may not be designated as a trade secret or proprietary information.__

<a id="_Toc443504638"></a>__Supplier Trade Secrets / Proprietary Information Designations Table__

__SOR/Other Document__

__Section/Page__

__Trade Secret / Proprietary Information__

__Reason__

<a id="_Hlk80875918"></a>

1. __Additional Terms and Conditions:__

The services to be provided are subject to the following additional provisions:

1. Effective July 1, 2020, the Code of Virginia requires contractors with the Commonwealth who spend significant time working with or in close proximity to state employees to complete sexual harassment training.  As a result of the new code, VITA and the Department of Human Resource Management (DHRM) are requiring that all contractors working through the CAI contract complete DHRM's "Preventing Sexual Harassment" training.  This training is available as either a short video or a written transcript on the DHRM website: [https://www.dhrm.virginia.gov/public-interest/contractor-sexual-harassment-training](https://www.dhrm.virginia.gov/public-interest/contractor-sexual-harassment-training). The selected Supplier must agree that any assigned resource will complete the training.
2. VDOT requires contractors to complete the Commonwealth Security Awareness training. The selected Supplier must agree that any assigned resource will complete the training.
3. The selected Supplier must agree that any assigned resource will review and conform to the IT Contingent Labor Program (ITCL) Contractor Code of Conduct. The Code of Conduct can be reviewed on VITA’s website at the following link:

[https://www.vita.virginia.gov/media/vitavirginiagov/supply-chain/pdf/Contingent-Worker-Code-of-Conduct.pdf](https://www.vita.virginia.gov/media/vitavirginiagov/supply-chain/pdf/Contingent-Worker-Code-of-Conduct.pdf)

1. __Scheduled Work Hours:__

8:00AM – 5PM EST, Monday through Friday (excluding state holidays)

1. __Facility and equipment to be provided by Authorized User:__

None.  See Section 12: Place of Performance.

Appendix – Attachments

All these documents are included in the ZIP file as part of this SOR package:

Business Requirements Document (BRD)

- 840 Copied Note Special Provision (CNSP) BRD Final Approved – Final Business Requirements
- Embedded Files from BRD
	- Price Sheet (2.1 Step 1)
	- Contract Type Template – ECForm (2.1 Step 2)
	- Contract Type Template – FCForm (2.1 Step 2)
	- Contract Type Template – SCForm (2.1 Step 2)
	- Sample Documents / Files from the Network Folder (2.1 Step 3)
	- Pick List (2.1 Step 4)
	- Private Sub Build (2.1 Step 6) 
	- Current State Context Diagram (2.2)
	- CNSP Process Mapping Final (2.3)
	- Draft for Construction Forms (2.3)
	- MS Access CNSP Tool (2.3)
	- Desired State Context Diagram (3.1)
	- Detailed Software Requirements (4.1) 

Enterprise Architecture Supplemental Statement of Requirements (EA-SSOR) – Final VDOT Technical Requirements and Standards

- Templates Identified in EA-SSOR
	- Scope template – not included in ZIP file
	- Context diagram
	- Business Data Flow Diagram example
	- Business Process Flow template
	- Data Mapping template
	- Data Flow Diagram template

Microsoft Dynamics 365 Fit/Gap Analysis Using the Detailed Software Requirements (User Stories and Acceptance Criteria).

