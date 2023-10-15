// File: Main.js
// Date: 2023-10-15
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

// Jazz guests XML object
var g_jazz_guests_xml = null;

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

    application_el.innerHTML = 'Application XML results:' + '<br>' +
    'n_members= ' + n_members.toString() + '<br>' +
                               'n_it_team_members= ' + n_it_team_members.toString() + '<br>';

    var n_level_xml = 1;
    
    g_jazz_guests_xml = new JazzGuestsXml(callbackGuestsXml, n_level_xml); 

} // callbackApplicationXml

// Callback function after the creation of the guests XML object
function callbackGuestsXml()
{
    var n_records = g_jazz_guests_xml.getNumberOfGuestRecords();

    var record_number = 4;

    var test_year = "2025";

    g_jazz_guests_xml.setGuestYear(record_number, test_year)

    var record_header = g_jazz_guests_xml.getGuestHeader(record_number);

    var record_names = g_jazz_guests_xml.getGuestNames(record_number);

    var record_file_type = g_jazz_guests_xml.getGuestFileType(record_number);

    var record_reg_number = g_jazz_guests_xml.getGuestRegNumber(record_number);

    var img_record_numbers = g_jazz_guests_xml.getRecordsImageArray();

    var n_img_records = img_record_numbers.length;

    var guests_el = getDivElementGuestsResults();

    var result_str = '<br>' +'Jazz guests XML results:' + '<br>' +
    "Number of guest records: " + n_records.toString() +  '<br>' +
    "Record number " + record_number.toString() +  '<br>' +
    "Record header '" + record_header + "'" +  '<br>' +
    "Record names '" + record_names + "'" +  '<br>' + 
    "Record file type '" + record_file_type + "'" +  '<br>' + 
    "Registration number " + record_reg_number.toString() +  '<br>' + 
    "Number of published IMG records " + n_img_records.toString() +  '<br>';

    guests_el.innerHTML = result_str;

    g_jazz_guests_xml.appendGuestNode();

    g_jazz_guests_xml.initAppendedForImg();

    var pretty_print_xml = new PrettyPrintXml(g_jazz_guests_xml.getXmlObject());

    var xml_win_str = pretty_print_xml.xmlToWinFormattedString();

    var el_pretty_print =  getDivElementPrettyPrint();

    //el_pretty_print.innerHTML = xml_win_str;

} // callbackGuestsXml

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Main Functions //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Id And Element Functions //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Returns the element application XML <div> element
function getDivElementApplicationResults()
{
    return document.getElementById(getIdDivElementApplicationResults());

} // getDivElementApplicationResults

//Returns the identity of the application XML <div> element
function getIdDivElementApplicationResults()
{
    return 'id_div_application_xml_results';

} // getIdDivElementApplicationResults

// Returns the element guests XML <div> element
function getDivElementGuestsResults()
{
    return document.getElementById(getIdDivElementGuestsResults());

} // getDivElementGuestsResults

//Returns the identity of the guests XML <div> element
function getIdDivElementGuestsResults()
{
    return 'id_div_jazz_guests_xml_results';

} // getIdDivElementGuestsResults

// Returns the element pretty print <div> element
function getDivElementPrettyPrint()
{
    return document.getElementById(getIdDivElementPrettyPrint());

} // getDivElementPrettyPrint

//Returns the identity of the pretty print XML <div> element
function getIdDivElementPrettyPrint()
{
    return 'id_div_pretty_print_xml';

} // getIdDivElementPrettyPrint 

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Id And Element Functions ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// User clicked merge files. 
// The JavaScript files will be merged to one file and written to the server directory
// /www/JazzScripts/. The directory name is defined in file MergeLoginLogout.php.
function eventMergeFiles()
{
    var file_name = 'Xml_20231015.js';

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

