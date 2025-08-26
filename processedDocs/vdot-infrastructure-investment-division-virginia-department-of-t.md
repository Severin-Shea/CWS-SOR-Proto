---
id: "vdot-infrastructure-investment-division-virginia-department-of-t"
name: "SOR EXAMPLE_OM_17501_VDOT SOR HMMS Photo Integration FINAL.docx"
sorType: "Application Integration"
agency: "VDOT, Infrastructure Investment Division"
client: "Virginia Department of Transportation (VDOT) — Infrastructure Investment Division"
date: "2022-06-15"
documentPath: "existingSORDocs/SORdocs/SOR EXAMPLE_OM_17501_VDOT SOR HMMS Photo Integration FINAL.docx"
extractedAt: "2025-08-26T09:02:12.983020+00:00Z"
---
Contract Number *(VA-210625-CAI)*

Contents

[__STATEMENT OF REQUIREMENTS (SOR)__	2](#_Toc283151016)

[__STATEMENT OF REQUIREMENTS TEMPLATE INSTRUCTIONS__	9](#_Toc283151017)

# <a id="_Toc283151016"></a>__STATEMENT OF REQUIREMENTS (SOR)__

__SOR \# VDOT-220615-01-CAI__

__CSC Photo Integration to HMMS Vueworks* *__

 

1. __Date:__ June 15, 2022 
2. __Authorized User__: Virginia Department of Transportation.
3. __Authorized User Contact Information:__

*Inderpreet Mann, Deputy Division Administrator*

*1401 E. Broad Street*

*Richmond, VA 23219*

Phone: 	(*[redacted-phone]*)

E-mail:	*([redacted-email])*

Fax:	*[redacted-phone])*

1. __Solicitation Schedule: __

__Event__

__Date__

Release SOR

06/22/2022

Supplier Response Due

06/29/2022

Award Decision

07/01/2022

Estimated Project Start Date

07/11/2022

1. __Evaluation and Scoring__

Supplier’s Response must be submitted in the specified Statement of Work (SOW) format and will be evaluated for format compliance.

Supplier’s Response will be evaluated for technical merit based on its appropriateness to the performance of agency requirements, its applicability to the Commonwealth Agency’s environment, and its effective utilization of Supplier and Commonwealth resources.

1. __Project/Service: __

This Statement of Requirements (SOR) is for support of Customer Service Center (CSC 3.0) developed on the Microsoft Dynamics CRM (CRM) platform and the Highway Maintenance Management System (HMMS) to identify the integration between them and pass the photos from CSC 3.0 to HMMS.

1. __Specialty Area __(Check one)__:__

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

<a id="_Hlk106807640"></a>  IV&V Services

  Geographical Information Systems

	

1. __Contract Type __(Check)__:__

<a id="Check1"></a> Fixed Price, Deliverable-based  

1. __Introduction:__

Project History:

- Currently customers are able to submit photos in the Customer Service Center (CSC) that are related to the service requests during the service request process.
- When the service request is converted to a work order in HMMS, the photos attached to the service request in the CSC are not being posted in the work order generated in HMMS. 

Business Problem:

- In the current process, the photos attached by the customer are not being shared with the field partners that is creating a confusion and does not provide a clear understanding of the request. To resolve this problem, the photos shall be posted in the HMMS work order generated from the CSC service request.
	-  This enables field partners to determine the situational awareness, priority of the work, tools and the number of technicians required for the job.
	- This also enables the field partners to save time from driving to location to analyze the intensity of the problem.
	- This shall also enable customers to have confidence if the photos attached to the service request are passed to the field workers since there will be no back and forth misunderstanding between customer and field worker.

Business Objectives:

- The field partners shall be able to have the clear understanding of the problem indicated in the service request created by the customer.
- The photos shall be posted in the HMMS work order generated from the CSC service request.

Project Management and Organizational Structure

The VDOT support manager(s) and the Vendor Support Manager are the main VDOT points of contact and are responsible for day-to-day management of the application solution.

VDOT will appoint up to one support manager per application and one for the platform.

1. __Scope of Work:__

This SOR defines the services required by Authorized User in support of the Project/Service.  

  

1. The scope of the project is to pass the photos that are submitted by the customer as attachments in the service request form in Customer Service Center (CSC 3.0) to HMMS.
2. The photos shall be passed and attached to the HMMS work order in the form of documents that are associated to the Service Request in the CSC. 
3. The photos that are being attached in the CSC Service Request are now being stored in Microsoft Dynamics and vendor shall develop a SSIS package to pass the photos from CSC service request to HMMS work order. 
	- Note: The HMMS work order are currently stored in VUEWorks and shall leverage the existing functionality for accessing the attachments & Images.
4. The notification email related to the work order sent to the user shall need to be modified with notification of Images attached in the work order.

Note: Body of the email shall need to be updated with the information of Images attached in the work order.

__Business Requirements:__

1. Photos that are attached to the Customer Service Center (CSC) Service request (SR) shall be passed to the Highway Maintenance Management System (HMMS) and attached to the work order.
	1. Photos that are passed from the CSC Service request to the HMMS work order shall be viewable to the field partners from the work order.  Simply associating it with the service request ID in HMMS is not acceptable, as the field partners generally access work orders, not SR's.
		1. System currently enables user to attach photos while creating the Service Request in the CSC.
		2. System currently converts the CSC service request to work order in the HMMS that can be accessible to the field partners.
		3. System shall pass the photos that are attached in the CSC service request to the HMMS work order during the work order conversion.
		4. System shall enable field partners to view the photos in the work order that are passed from CSC service request.
	2. DOTi, VDOT's intranet, currently accepts a single attachment up to 6mb of size. This integration must be able to accept the larger attachments if the limit is changed in the future.
		1. System shall enable user to attach one photo or file up to 6mb of size to CSC service request.
		2. System shall be able to attach the photos to the HMMS work order up to 6mb of size.
		3. System shall be able to attach the photos of larger size to HMMS work order if the attachment size is increased for CSC service request.
2. User to be notified in an email from HMMS that the work order is attached with images.
	1. The HMMS notification email related to the work order sent to the HMMS user must include the text to inform the user that an image is associated with the work order, and preferably will include a hyperlink to the picture.
		1. System shall be able to send email notification to the user when a work order generated.
		2. System shall include the information regarding the image attached to the work order in the body of the email notification sent to the user.
3. Duplicate service requests with the images shall be linked to the parent work order.
	1. If duplicate services requests with photos attached are submitted in CSC, all the images of the child service requests (duplicate service requests) shall be linked to the parent work order that is created from parent service request.

Note: Currently, duplicate Service requests are converted to child service requests and are linked to the parent work order. The functionality remains same with the Photos as well.

- 
	- 
		1. System shall be able to create duplicate service requests.
		2. System shall be able to generate all the duplicate service requests as child service requests and link to the parent work order, generated from parent service request.
		3. System shall be able to link all the images of the child service requests to the parent work order that is parent service request.

Assumptions:

- 
	- Permits HMMS field users to view customer-submitted artifacts without having to log into another system.
	- Reduced licensing costs as MS Dynamics seats are not consumed.
	- Uncouples dependency on CSC’s ownership/retention to Photo artifacts of HMMS WOs
	- Users are able to view attachments using HMMS native features 

1. Highlights of Design:
	- All work to be completed by vendor (send in a format acceptable to DTS) and DTS (receive). 
	- Assumption is that CSC currently has capability to support use cases of users uploading photographs to a Service Request.
	- Expectation that HMMS vendor shall NOT need to change their data model to accept attachments.
	- VUEWorks and VUEWorksMobile will utilize existing attachment functionality to view images. 
	- Notes: HMMS VUEWorks version is 2019.1.3, HMMS MBT VUEWorks version is 2019.3.3     

__Technical Requirements:__

- Refer to the architecture diagram attached with this SOR.





__APIs required:__

## Get Document by Id

__Function:__ This__ __API endpoint allows for the retrieval of documents by ID.

- __URL:__

https://server.address/mobileapi/api/\{projectname\}/documents

- __Method:__

GET Async

- __HEADER__

ApiKey=\[string\] (Basic Authentication) 

OR

Authorization=\[string\] (Bearer Token with IDP Authentication) 

- __URL Params__

__/__ID

EX: https://server.address/mobileapi/api/\{projectname\}/documents/5

- __Data Params__

None

- __Success Response:__

File Download

- __Code:__ 200

__Content:__ \[WOId, WOId\]

 

- __Error Response:__ 
- __Code:__ 403 Forbidden 

__Content:__ \{ Invalid API key.\} 

OR 

- __Code:__ 401 UNAUTHORIZED 

__Content:__ \{"Unauthorized" \} 

OR 

- __Code:__ 404 NOT FOUND 

__Content:__ \{"Error Message" \} 

OR Error

“"Document not found where Id = \{0\} and name = \{1\}"”

# Uploading Documents

__Function:__ This API endpoint allows the upload of a document to the server. ThisMultipartFormDataStreamProvider will read and parse the requested content, but it needs the name of the directory where the data should be saved. In order to determine where the data should be saved, we need some of the parameters from the request content.

- __URL__

https://server.address/mobileapi/api/\{projectname\}/documents

- __Method:__

POST Async

- __HEADER__

ApiKey=\[string\] (Basic Authentication)

OR

Authorization=\[string\] (Bearer Token with IDP Authentication)

- __URL Params__

__None__

- __Data Params__

JSON DocumentUploadObject

\{ "DocumentType": 11, "DocumentLibrary" : 16, "User" : 436, "Images" : Image Binary, "RequireImageGPSLoaction" : false\}

- __Success Response:__

JSON DocumentUploadResult

- __Code:__ 200

__Content:__ \[WOId, WOId\]

- __Error Response:__
- __Code:__ 403 __Forbidden__

__Content:__ \{ Invalid API key.\}

OR

- __Code:__ 401 __UNAUTHORIZED__

__Content:__ \{"Unauthorized" \}

OR 

- __Code:__ 404 NOT FOUND

__Content:__ \{"Error Message" \}

## DocumentUploadResult (DTO) 

Property 

Type 

Nullable 

Description 

ID 

int 

yes 

 

TargetName 

string 

no 

 

Name 

string 

no 

 

URL 

string 

no 

URL to the document 

Size 

long 

no 

File Size in Megabytes 

Location  

coordinate 

no 

 

Success 

bool  

no 

 

Error 

string 

no 

Error message 

## DocumentUploadObject (DTO) 

Property 

Type 

Nullable 

Description 

DocumentType 

int 

no 

Type to associate document with 

DocumentLibrary 

int 

no 

Library to place the document in 

User 

int 

no 

User uploading document 

Images 

string 

no 

Binary data for images 

RequireImageGPSLocation 

bool 

no 

flag 

1. __Period of Performance:__

Delivery of all products and services defined in the Statement of Work will occur within *(XX)* months of project execution date.  

1. __Place of Performance__ (Check one)__:__

  Authorized User’s Location		­­­­­­­­­­\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_* (City, VA)*

  Supplier’s Location			\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_* (City, State)*

  Authorized User’s and/or 					See below explanation.

The tasks associated with this engagement will be performed primarily at Subcontractor’s location, or as needed at the Authorized User’s location in Richmond, Virginia.

       

1. __Project Staffing__
2. __Supplier Personnel__

The roles listed in the table below represent the minimum Supplier personnel requirements for this engagement. 

__Role__

__Key Personnel (Y/N)__

__Years of Experience__

__Certifications__

__References Required (Y/N)__

Vendor Support Manager

IT Developer

IT Architect

Business Analyst

Scrum Master

1. __Authorized User Staff__

The roles listed in the table below represent Authorized User’s staff and the estimated time each will be available to work on the project.

__Role__

__Description__

__% Project Availability__

Outsourced Delivery Program Manager  

Manages the engagement with the Supplier; main point of contact for contracting and engagement issues 

10% 

Business resources

Provides clarification with the requirements and approves.

As needed

Project Manager 

Manages the Supplier and Authorized User project tasks and approves Supplier deliverables 

80% 

Enterprise Architect 

Ensure Supplier and Authorized User compliance with selected solution architecture and approves Supplier deliverables 

10% 

1. __Milestones and Deliverables:__

The minimum required milestones and deliverables, and the estimated completion date for each deliverable, are listed in the following table.  

__\#__

__Milestone__

__Event(s)__

__Deliverable(s)__

__Estimated Completion Date	__

1

Project Kick-off

Meeting Presentation

Supplier to Propose

2

Requirements Complete

Detailed Design Document

Supplier to Propose

3

Provide Solution.

Detailed Design Document & Solution diagram

Supplier to Propose

The Supplier should provide all deliverables in electronic form, using the following software standards (or lower convertible versions):

__Deliverable Type__

__Format__

All

Microsoft Office (i.e. Word, Excel, PowerPoint, Project, etc.)

1. __Travel Expenses __(Check one)__:__

   No travel will be required for this engagement

   Travel must be included in the total fixed price of the solution

1. __Payment __(Check all that apply)__:__

   Payment made based on successful completion and acceptance of deliverables

  All payments, except final payment, are subject to a *(XX)*% holdback

1. __Acceptance Criteria:__

The Project Manager will have *(10)* days from receipt of the deliverable to provide Supplier with the signed acceptance receipt.

Final acceptance of services provided under the SOW will be based upon (Check one):

   User Acceptance Test

Acceptance Criteria for this solution will be based on a User Acceptance Test (UAT) designed by Supplier and accepted by Authorized User. The UAT will ensure that all of the functionality required for the solution has been delivered.  The Supplier will provide the Authorized User with a detailed test plan and acceptance checklist based on the mutually agreed upon UAT plan.  This UAT plan checklist will be incorporated into the SOW.

   Final Report

Acceptance criteria for this solution will be based on a final report.  In the SOW, Supplier will define the format and content of the report to be provided to Authorized User for final acceptance.

   Other (specify):  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1. __Project Roles and Responsibilities:__

__Responsibility Matrix__

__Supplier__

__Authorized User__

Project Management, Planning and Requirements Elicitation & Development. to deliver agreed upon documented scope 

✓   

✓

Make changes required on CSC 3.0 end to pass the photos to HMMS

✓   

Develop a SSIS package to pass the photos from CSC to HMMS

✓   

Make changes required from CSC & HMMS end to integrate with SSIS package

✓   

Make changes to Microsoft dynamics to integrate with the SSIS package.

✓   

Make changes to include the information regarding the images attached to the work order in the work order notification email.

✓   

Make changes to link the child service requests images to parent work order.

✓   

Application Design and Implementation

✓   

Solution Design  

✓   

✓

Conversion Support

✓   

Conversion Support – SME

✓   

Provide all documentation listed in the EA-SSOR (from the artifacts list) 

✓   

Develop Test Plan(s)

✓   

Unit Testing 

✓   

System Testing

✓

User Acceptance Testing

✓

Transition and Deployment to Prod 

✓   

✓   

Product Maintenance and Support

✓   

✓   

Post implementation Warranty Services 

  ✓   

✓   

Provide Supplier with access to network and development, and test environment access 

✓   

Installation, configuration and user provisioning of Microsoft Team Foundation Server environment (as needed)

__ __ 

    ✓    __ __

Installation, configuration and user provisioning of SharePoint Team site (as needed) 

__ __ 

✓   

Server Modules – Installation and Implementation. (as needed)

__ __ 

✓    __ __

PC Workstations – Hardware, OS (as needed) 

__ __ 

✓    __ __

PC Workstations – Client Software  (as needed) 

__ __ 

✓    __ __

Keyboard, Mouse, Monitor on Supplier Premises 

✓   __ __ 

__ __

Problem Tracking 

✓   __ __ 

✓    __ __

Troubleshooting – IT Infrastructure 

__ __ 

✓    __ __

Troubleshooting – Solution 

✓   __ __ 

__ __

Troubleshooting – Supplier network and premise equipment 

✓    __ __ 

✓      

1. __ Criminal Background Checks and Other Security Requirements (check all that are required):__

 

* * * *Standard CAI Required Background Check

* * * *Agency Specific Background Check – VDOT required fingerprinting

1. __Performance Bond __(Check one)__:__

 Required for *(XXX)*% of the SOW value

   Not Required

1. __Reporting __(Check all that are required):

   __Weekly or Bi-weekly Status Update__ 

The weekly/bi-weekly status report, to be submitted by Supplier to Authorized User, should include: accomplishments to date as compared to the project plan; any changes in tasks, resources or schedule with new target dates, if necessary; all open issues or questions regarding the project; action plan for addressing open issues or questions and potential impacts on the project; risk management reporting. 

  __Other(s) __(Specify) \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1. __Federal Funds __(Check one):

   Project will be funded with federal grant money 

  No federal funds  will be used for this project

1. __Training and Documentation:__
2. __Training is:__

 Required as specified below

   Not Required

1. __Documentation is:__

   Required as specified below

   Not Required

Documentation Requirements: as detailed in the scope of work 

1. __Additional Terms and Conditions:__

The services to be provided are subject to the following additional provisions:

1. Effective July 1, 2020, the Code of Virginia requires contractors with the Commonwealth who spend significant time working with or in close proximity to state employees to complete sexual harassment training.  As a result of the new code, VITA and the Department of Human Resource Management (DHRM) are requiring that all contractors working through the CAI contract complete DHRM's "Preventing Sexual Harassment" training.  This training is available as either a short video or a written transcript on the DHRM website: https://www.dhrm.virginia.gov/public-interest/contractor-sexual-harassment-training. The selected Supplier must agree that any assigned resource will complete the training.
2. The selected Supplier must agree that any assigned resource will review and conform to the IT Contingent Labor Program (ITCL) Contractor Code of Conduct.  The Code of Conduct can be reviewed on VITA’s website at the following link:

https://www.vita.virginia.gov/media/vitavirginiagov/supply-chain/pdf/Contingent-Worker-Code-of-Conduct.pdf

1. __Scheduled Work Hours:__

N/A

1. __Facility and equipment to be provided by Authorized User:__

The Authorized User may provide furniture and equipment within limited workspace on a temporary basis. Permanent office space, furniture and equipment are the responsibility of the Supplier. While on-site at the project location, Authorized User will provide access to a copier, fax, the agency LAN and the internet (for up to two connections).  Authorized User will also provide temporary desk space. Supplier must provide any cell phones, personal computers or laptops required by the Team.  The VITA technical staff supporting the agency’s network must verify that any personal computers or laptops meet minimum-security configuration standards (e.g., current virus protection) before any equipment may be connected to the agency’s LAN.

Authorized User will also provide access to all Project/Service-related information, including, but not limited to, technical documentation and project status and financial data and to project and Supplier personnel for information related to the project.

1. __Appendix:__

- Please refer the EA – SSOR document attached with the SOR.

