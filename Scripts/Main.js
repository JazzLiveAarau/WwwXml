// File: Main.js
// Date: 2023-05-18
// Author: Gunnar Lidén

// Inhalt
// =============
//
// Main function for the test of XML functions
//
// Server directory for WwwXml is /www/XmlLib/

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Application XML object
var g_application_xml = null;

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Main Functions ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Main (onload) function for the XML application 
function initTestXml()
{
    var n_level_xml = 1;
    
    g_application_xml = new JazzApplicationXml(callbackApplicationXml, n_level_xml); 

} // initTestControls

// Callback function after the creation of the application XML object
function callbackApplicationXml()
{
    var n_members = g_application_xml.getNumberOfMembers();

    var it_keywords = [];
    it_keywords[0] = 'Webmaster';
    it_keywords[1] = 'Programmierer';
    it_keywords[2] = ' IT ';
    it_keywords[3] = 'Entwicklung';

    var n_it_team_members = g_application_xml.getNumberOfItTeamMembers(it_keywords);

    var application_el = getDivElementApplicationResults();

    application_el.innerHTML = 'n_members= ' + n_members.toString() + '<br>' +
                               'n_it_team_members= ' + n_it_team_members.toString();

} // callbackApplicationXml

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Main Functions //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Id And Element Functions //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Returns the element test control two <div> element
function getDivElementApplicationResults()
{
    return document.getElementById(getIdDivElementApplicationResults());

} // getDivElementApplicationResults

//Returns the identity of the test control two <div> element
function getIdDivElementApplicationResults()
{
    return 'id_div_application_xml_results';

} // getIdDivElementApplicationResults

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Id And Element Functions ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// User clicked merge files. 
// The JavaScript files will be merged to one file and written to the server directory
// /www/JazzScripts/. The directory name is defined in file MergeLoginLogout.php.
function eventMergeFiles()
{
    var file_name = 'Xml_20230518.js';

    $.post
      ('PhpMerge/MergeXml.php',
        {
          file_name: file_name
        },
        function(data_save,status_save)
		{
            if (status_save == "success")
            {
                alert("JavaScript files merged to " + file_name + 
                " saved to server directory /www/JavaScripts/.");
            }
            else
            {
				alert("Execution of MergeControls.php failed");
            }          
        } // function

      ); // post
	  

} // eventMergeFiles

