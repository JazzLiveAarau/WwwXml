// File: Main.js
// Date: 2025-04-15
// Author: Gunnar Lidén

// Inhalt
// =============
//
// Main function for the test of XML functions
//
// Server directory for WwwXml is /www/WwwXml/

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Application XML object
var g_application_xml = null;

// Jazz guests XML object
var g_jazz_guests_xml = null;

// Jazz season XML object
var g_jazz_season_xml = null;

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Main Functions ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Main (onload) function for the XML application 
function initTestXml()
{
    // testDates();

    var n_level_xml = 1;
    
    g_application_xml = new JazzApplicationXml(callbackApplicationXml, n_level_xml); 

    // testUtilXml();

} // initTestControls

function testDates()
{
    var concert_year = 2024;

    var concert_month = 2;

    var concert_day = 29;

    var n_days_to_concert = SeasonXml.numberOfDaysToCurrentDate(concert_year, concert_month, concert_day);

    concert_year = 2024;

    concert_month = 2;

    concert_day = 28;

    n_days_to_concert_one_before = SeasonXml.numberOfDaysToCurrentDate(concert_year, concert_month, concert_day);

    concert_year = 2024;

    concert_month = 3;

    concert_day = 1;

    n_days_to_concert_one_after = SeasonXml.numberOfDaysToCurrentDate(concert_year, concert_month, concert_day);

    alert("n_days_to_concert_one_before= " + n_days_to_concert_one_before.toString()  + 
    " n_days_to_concert= " + n_days_to_concert.toString()  + " n_days_to_concert_one_after= " + n_days_to_concert_one_after.toString()          );

} // testDates

function testUtilXml()
{
    var input_str = 'Some text Hennes & Mauritz. A limit Something >= 24 and < 122. A string inside a string. Somebody said "I am the greatest".';

    var already_escaped_str = 'Some text Hennes &amp; Mauritz. A limit Something &gt;= 24 and &lt; 122. A string inside a string. Somebody said &quot;I am the greatest&quot;.'

    var input_apostroph_str = "Some text Hennes & Mauritz. A limit Something >= 24 and < 122. A string inside a string. Somebody said 'I am the greatest'.";


    var escaped_str = UtilXml.escapeString(input_str);
    //var escaped_str = UtilXml.escapeString(already_escaped_str);
    //var escaped_str = UtilXml.escapeString(input_apostroph_str); Works but strings not equal  (input_str != unescaped_str) Diff: ' and "

    alert(escaped_str);

    var unescaped_str = UtilXml.unescapeString(escaped_str);

    if (input_str != unescaped_str)
    {
        alert("TestUtil Error Cannot convert back");

        console.log(input_str);
        console.log(unescaped_str);
    }
    else
    {
        alert("TestUtil  Conversion back is OK ");
    }

} // testUtilXml

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

    var b_update_xml = false;
    
    g_jazz_guests_xml = new JazzGuestsXml(callbackGuestsXml, n_level_xml, b_update_xml); 

} // callbackApplicationXml

// Callback function after the creation of the guests XML object
function callbackGuestsXml()
{
    var jazz_guest_array = g_jazz_guests_xml.getJazzGuestArray();

    // 20241006 Was not uploaded to the server ?? writeJazzGuestRecordArrayCode(jazz_guest_array);
    
    var n_records = g_jazz_guests_xml.getNumberOfGuestRecords();

    var header_array = g_jazz_guests_xml.getHeaderArray();

    var record_number = 1;

    var jazz_guest_rec = new JazzGuest();
    
    jazz_guest_rec.setJazzGuestRecord(g_jazz_guests_xml, record_number);

    jazz_guest_rec.setRemark('Test remark set in function callbackGuestsXml');

    jazz_guest_rec.setRegNumber('10');

    jazz_guest_rec.appendXmlJazzGuestRecord(g_jazz_guests_xml);

    var jazz_guest_rec_two = new JazzGuest();

    jazz_guest_rec_two.setJazzGuestRecord(g_jazz_guests_xml, record_number);

    var b_equal = JazzGuest.recordsAreEqual(jazz_guest_rec, jazz_guest_rec_two);

    displayXmlObject();

    var img_record_numbers = g_jazz_guests_xml.getRecordsImageArray();

    var n_img_records = img_record_numbers.length;

    var jazz_guest_search_object = new JazzGuestSearch(g_jazz_guests_xml);

    jazz_guest_search_object.setIncludeMusicians(true);

    var search_array = [];
    search_array[0] = 'Laura Cesar';
    search_array[1] = 'Tobias Friedli';

    var photo_data_list = jazz_guest_search_object.executeArray(search_array);

    var guests_el = getDivElementGuestsResults();

    var result_str = '<br>' +'Jazz guests XML results:' + '<br>' +
    "Number of published IMG records " + n_img_records.toString() +  '<br>' +
    "Number of guest images " + photo_data_list.getNumberOfPhotos().toString() +  '<br>';

    guests_el.innerHTML = result_str;

    g_jazz_guests_xml.appendGuestNode();

    g_jazz_guests_xml.initAppendedForImg();

    displayXmlObject();

    var n_level_xml = 1;

    var season_start_year = 2023;

    g_jazz_season_xml = new SeasonXml(callbackSeasonXml, n_level_xml, season_start_year);

} // callbackGuestsXml

var g_jazz_guest_rec_code_str = '';

function writeJazzGuestRecordArrayCode(i_jazz_guest_array)
{
    g_jazz_guest_rec_code_str = '';
    
    // console.log('var jazz_guest_array = [];');

    g_jazz_guest_rec_code_str += 'var jazz_guest_array = []; \n';

    var n_rec = i_jazz_guest_array.length;

    n_rec = 5; // QQQQQQQQ

    for (var index_rec=0; index_rec < n_rec; index_rec++)
    {
        var jazz_guest_rec = i_jazz_guest_array[index_rec];

        writeJazzGuestRecordCode(jazz_guest_rec, index_rec);

    }

    console.log(g_jazz_guest_rec_code_str);

}

function writeJazzGuestRecordCode(i_jazz_guest_rec, i_index_rec)
{
    var strt_str = 'jazz_guest_array[' + i_index_rec.toString() + ']';

    g_jazz_guest_rec_code_str += strt_str + ' = new JazzGuest(); \n';

    g_jazz_guest_rec_code_str += strt_str + '.setHeader("'+ i_jazz_guest_rec.getHeader() + '"); \n';

    g_jazz_guest_rec_code_str += strt_str + '.setText("'+ i_jazz_guest_rec.getText() + '"); \n';

    g_jazz_guest_rec_code_str += strt_str + '.setNames("'+ i_jazz_guest_rec.getNames() + '"); \n';

    g_jazz_guest_rec_code_str += strt_str + '.setFileName("'+ i_jazz_guest_rec.getFileName() + '"); \n';

    g_jazz_guest_rec_code_str += strt_str + '.setFileType("'+ i_jazz_guest_rec.getFileType() + '"); \n';

    g_jazz_guest_rec_code_str += strt_str + '.setStatus("'+ i_jazz_guest_rec.getStatus() + '"); \n';

    g_jazz_guest_rec_code_str += strt_str + '.setBand("'+ i_jazz_guest_rec.getBand() + '"); \n';

    g_jazz_guest_rec_code_str += strt_str + '.setMusicians("'+ i_jazz_guest_rec.getMusicians() + '"); \n';

    g_jazz_guest_rec_code_str += strt_str + '.setYear('+ i_jazz_guest_rec.getYear() + '); \n';

    g_jazz_guest_rec_code_str += strt_str + '.setMonth('+ i_jazz_guest_rec.getMonth() + '); \n';

    g_jazz_guest_rec_code_str += strt_str + '.setDay('+ i_jazz_guest_rec.getDay() + '); \n';

    g_jazz_guest_rec_code_str += strt_str + '.setRemark("'+ i_jazz_guest_rec.getRemark() + '"); \n';

    g_jazz_guest_rec_code_str += strt_str + '.setAvatar("'+ i_jazz_guest_rec.getAvatar() + '"); \n';

    g_jazz_guest_rec_code_str += strt_str + '.setEmail("'+ i_jazz_guest_rec.getEmail() + '"); \n';

    g_jazz_guest_rec_code_str += strt_str + '.setTelephone("'+ i_jazz_guest_rec.getTelephone() + '"); \n';

    g_jazz_guest_rec_code_str += strt_str + '.setPublish("'+ i_jazz_guest_rec.getPublish() + '"); \n';

    g_jazz_guest_rec_code_str += strt_str + '.setRegNumber('+ i_jazz_guest_rec.getRegNumber() + '); \n';

} // writeJazzGuestRecordCode

function displayXmlObject()
{
    var pretty_print_xml = new PrettyPrintXml(g_jazz_guests_xml.getXmlObject());

    var xml_win_str = pretty_print_xml.xmlToWinFormattedString();

    var el_pretty_print =  getDivElementPrettyPrint();

    // el_pretty_print.innerHTML = xml_win_str;
}

// Callback function after the creation of the season XML object
function callbackSeasonXml()
{
    var concert_number = 4;
    var musician_number = 1;

    var band_name = g_jazz_season_xml.getBandName(concert_number);

    var musician_name = g_jazz_season_xml.getMusicianName(concert_number, musician_number);

    var result_str = '<br>' +'Jazz season XML results:' + '<br>' +
    "Concert number= " + concert_number.toString() + ' Musician number= ' + concert_number.toString() + '<br>' +
    'Band name= ' + band_name + '<br>' +
    'Musician name= ' + musician_name;

    var el_season_results = getDivElementSeasonResults();

    el_season_results.innerHTML = result_str;

} // callbackSeasonXml

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

// Returns the element season XML <div> element
function getDivElementSeasonResults()
{
    return document.getElementById(getIdDivElementSeasonResults());

} // getDivElementSeasonResults

//Returns the identity of the season XML <div> element
function getIdDivElementSeasonResults()
{
    return 'id_div_jazz_season_xml_results';

} // getIdDivElementSeasonResults

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
// /www/JazzScripts/. The directory name is defined in file MergeXml.php.
function eventMergeFiles()
{
    var file_name = 'Xml_20250415.js';

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

