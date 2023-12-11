// File: SeasonXml.js
// Date: 2023-12-10
// Author: Gunnar Lidén

// File content
// =============
//
// Class for the jazz season program XML file JazzProgramm_20NN_20MM.xml
class SeasonXml
{
    // Creates the instance of the class
    // i_callback_function_name: Function that shall be called after loading
    // i_n_level_xml:            Directory levels to /www/XML/
    constructor(i_callback_function_name, i_n_level_xml, i_start_year) 
    {
        // Member variables
        // ================

        // Call back function name
        this.m_callback_function_name = i_callback_function_name;

        // Directory levels to /www/XML/
        this.m_n_level_xml = i_n_level_xml;

        // Season start year. Used for the construction of the XML file name
        this.m_start_year = i_start_year;

        // Path and name of test XML file in the computer
        this.m_xml_file_name_local = 'XmlTestData/SeasonProgramTestData.xml'; 

        // The jazz application xml object
        this.m_object_xml = null;

        // Object holding the tags
        this.m_tags = new SeasonTags();

        // Flag that a node value not have been set
        this.m_not_yet_set_node_value = "NotYetSetNodeValue";

        // Loads the XML object for aapplication file and calls the function m_callback_function_name
        this.loadOneXmlFile(this, this.getXmlSeasonFileName(), this.m_callback_function_name);

    } // constructor

    // Sets the XML object
    setXmlObject(i_object_xml)
    {
        this.m_object_xml = i_object_xml;

    } // setXmlObject

    // Returns the XML object
    getXmlObject()
    {
        return this.m_object_xml;

    } // getXmlObject    

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Get Season Functions ////////(///////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the autumn year
    getYearAutumn()
    {
        return this.getSeasonNodeValue(this.m_tags.getYearAutumn());
        
    } // getGuestYear

    // Returns the autumn year of the season as integer
    getYearAutumnInt()
    {
        var ret_autumn_year_int = -12345;

        var autumn_year_str = this.getYearAutumn();

        if (autumn_year_str.length != 4)
        {
            ret_autumn_year_int = -1;

            return ret_autumn_year_int;
        }

        ret_autumn_year_int = parseInt(autumn_year_str);

        return ret_autumn_year_int;

    } // getYearAutumnInt

    // Returns the spring year
    getYearSpring()
    {
        return this.getSeasonNodeValue(this.m_tags.getYearSpring());
        
    } // getYearSpring

    // Returns the flag (string TRUE or FALSE) telling if the concert program is published
    getPublishProgram()
    {
        return this.getSeasonNodeValue(this.m_tags.getPublishProgram());
        
    } // getPublishProgram

    // Returns the flag (boolean true or false) telling if the concert program is published
    getPublishProgramBool()
    {
        if ('TRUE' == this.getPublishProgram())
        {
            return true;
        }
        else
        {
            return false;
        }
        
    } // getPublishProgramBool

    ///////////////////////////////////////////////////////////////////////////
    /////// End Get Season Functions ////////(/////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Get Concert Functions ////////(//////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the concert day name.
    getDayName(i_concert_number) // Previously getConcertDayName
    {
        return this.getConcertNodeValue(this.m_tags.getDayName(), i_concert_number);
        
    } // getDayName

   // Returns the concert day
   getDay(i_concert_number) // Previously getConcertDay
   {
       return this.getConcertNodeValue(this.m_tags.getDay(), i_concert_number);
       
   } // getDay

   // Returns the concert month
   getMonth(i_concert_number) // Previously getConcertMonth
   {
       return this.getConcertNodeValue(this.m_tags.getMonth(), i_concert_number);
       
   } // getMonth

   // Returns the concert year
   getYear(i_concert_number) // Previously getConcertYear
   {
       return this.getConcertNodeValue(this.m_tags.getYear(), i_concert_number);
       
   } // getYear

   // Returns the concert start hour
   getStartHour(i_concert_number) // Previously getConcertStartHour
   {
       return this.getConcertNodeValue(this.m_tags.getStartHour(), i_concert_number);
       
   } // getStartHour

   // Returns the concert start minute
   getStartMinute(i_concert_number) // Previously getConcertStartHour
   {
       return this.getConcertNodeValue(this.m_tags.getStartMinute(), i_concert_number);
       
   } // getStartMinute

   // Returns the concert end hour
   getEndHour(i_concert_number) // Previously getConcertEndHour
   {
       return this.getConcertNodeValue(this.m_tags.getEndHour(), i_concert_number);
       
   } // getEndHour
 
   // Returns the concert end minute
   getEndMinute(i_concert_number) // Previously getConcertEndMinute
   {
       return this.getConcertNodeValue(this.m_tags.getEndMinute(), i_concert_number);
       
   } // getEndMinute 

   // Returns the concert place
   getPlace(i_concert_number) // Previously getConcertEndMinute
   {
       return this.getConcertNodeValue(this.m_tags.getPlace(), i_concert_number);
       
   } // getPlace 

   // Returns the concert cancelled flag
   // DO NOT CALL THIS FUNCTION DIRECTLY. ALWAYS CALL ConcertIsCancelled
   // For older seasonprograms the tag is not defined in the XML files 
   getCancelled(i_concert_number) // Previously getConcertCancelled
   {
       return this.getConcertNodeValue(this.m_tags.getCancelled(), i_concert_number);
       
   } // getCancelled 

   // Returns true if the concert was cancelled
   // Please note that for older seasonprograms the cancelled concert tag 
   // is not defined in the XML season program files 
   ConcertIsCancelled(i_concert_number)
   {
        var ret_value = false;

        if (!this.ConcertCancelledFlagIsDefinedInXmlFile())
        {
            return ret_value;
        }

        var concert_cancelled_str = this.getConcertCancelled(i_concert_number);
        
        if (concert_cancelled_str == 'TRUE')
        {
            ret_value = true;
        }
        else
        {
            ret_value = false;
        }

    return ret_value;

   } // ConcertIsCancelled

   // Returns true if the concert cancelled flag is defined in the season XML file
   ConcertCancelledFlagIsDefinedInXmlFile()
   {
        var year_autumn = this.getYearAutumn();

        if (year_autumn < 2019)
        {
            return false;
        }
        else
        {
            return true;
        }

   } // ConcertCancelledFlagIsDefinedInXmlFile

   // Returns the band name
    getBandName(i_concert_number)
    {
        return this.getConcertNodeValue(this.m_tags.getBandName(), i_concert_number);
        
    } // getBandName

   // Returns the concert short text
   getShortText(i_concert_number) // Previously getConcertShortText
   {
       return this.getConcertNodeValue(this.m_tags.getShortText(), i_concert_number);
       
   } // getShortText

   // Returns the concert additional text
   getAdditionalText(i_concert_number) // Previously getConcertAdditionalText
   {
       return this.getConcertNodeValue(this.m_tags.getAdditionalText(), i_concert_number);
       
   } // getAdditionalText
 
   // Returns the band website URL
   getBandWebsite(i_concert_number) 
   {
       return this.getConcertNodeValue(this.m_tags.getBandWebsite(), i_concert_number);
       
   } // getBandWebsite

   // Returns the band sound sample file name (mp3 or mp4 file)
   getSoundSample(i_concert_number) 
   {
       return this.getConcertNodeValue(this.m_tags.getSoundSample(), i_concert_number);
       
   } // getSoundSample

   // Returns the label for the additional text
   // Please note that this function not is implemented previously
   getLabelAdditionalText(i_concert_number) 
   {
       return this.getConcertNodeValue(this.m_tags.getLabelAdditionalText(), i_concert_number);
       
   } // getLabelAdditionalText
  
   // Returns the label for the concert flyer free text
   getLabelFlyerText(i_concert_number) 
   {
       return this.getConcertNodeValue(this.m_tags.getLabelFlyerText(), i_concert_number);
       
   } // getLabelFlyerText

   // Returns the concert flyer free text
   getFlyerText(i_concert_number) 
   {
       return this.getConcertNodeValue(this.m_tags.getFlyerText(), i_concert_number);
       
   } // getFlyerText

   // Returns the concert flyer free text
   getFlyerText(i_concert_number) 
   {
       return this.getConcertNodeValue(this.m_tags.getFlyerText(), i_concert_number);
       
   } // getFlyerText

   // Returns the flag that tells if the flyer text can be published on the homepage
   // DO NOT CALL THIS FUNCTION DIRECTLY. ALWAYS CALL FlyerTextCanBePublishedOnHomepage
   // For older seasonprograms the tag is not defined in the XML files 
   getFlyerTextHomepagePublish(i_concert_number) 
   {
       return this.getConcertNodeValue(this.m_tags.getFlyerTextHomepagePublish(), i_concert_number);
       
   } // getFlyerTextHomepagePublish

   // Returns true if the flyer text can be published on the homepage
   // Please note that for older seasonprograms this tag 
   // is not defined in the XML season program files 
   FlyerTextCanBePublishedOnHomepage(i_concert_number)
   {
       var ret_value = false;
   
       if (!this.HomepageFlyerPublishFlagIsDefinedInXmlFile())
       {
           return ret_value;
       }
   
       var concert_cancelled_str = this.getFlyerTextHomepagePublish(i_concert_number);
       
       if (concert_cancelled_str == 'TRUE')
       {
           ret_value = true;
       }
       else
       {
           ret_value = false;
       }
   
       return ret_value;
   
   } // FlyerTextCanBePublishedOnHomepage
   
   // Returns true if the homepage flyer publish flag is defined in the season XML file
   HomepageFlyerPublishFlagIsDefinedInXmlFile()
   {
       var year_autumn = this.getYearAutumn();
   
       if (year_autumn < 2019)
       {
           return false;
       }
       else
       {
           return true;
       }
   
   } // HomepageFlyerPublishFlagIsDefinedInXmlFile

   // Returns the file name of the concert mid size poster
   getPosterMidSize(i_concert_number) 
   {
       return this.getConcertNodeValue(this.m_tags.getPosterMidSize(), i_concert_number);
       
   } // getPosterMidSize

   // Returns the file name of the concert small size poster
   getPosterSmallSize(i_concert_number) 
   {
       return this.getConcertNodeValue(this.m_tags.getPosterSmallSize(), i_concert_number);
       
   } // getPosterSmallSize
 
   // Returns Returns the gallery one URL
   getPhotoGalleryOne(i_concert_number) 
   {
       return this.getConcertNodeValue(this.m_tags.getPhotoGalleryOne(), i_concert_number);
       
   } // getPhotoGalleryOne

   // Returns the gallery two URL
   getPhotoGalleryTwo(i_concert_number) 
   {
       return this.getConcertNodeValue(this.m_tags.getPhotoGalleryTwo(), i_concert_number);
       
   } // getPhotoGalleryTwo

   // Returns the gallery one ZIP file URL
   getPhotoGalleryOneZip(i_concert_number) 
   {
       return this.getConcertNodeValue(this.m_tags.getPhotoGalleryOneZip(), i_concert_number);
       
   } // getPhotoGalleryOneZip

   // Returns the gallery two ZIP file URL
   getPhotoGalleryTwoZip(i_concert_number) 
   {
       return this.getConcertNodeValue(this.m_tags.getPhotoGalleryTwoZip(), i_concert_number);
       
   } // getPhotoGalleryTwoZip

   // Returns the musician contact person name
   getContactPerson(i_concert_number) 
   {
       if (this.getYearAutumnInt() < 2016) return "";

       return this.getConcertNodeValue(this.m_tags.getContactPerson(), i_concert_number);
       
   } // getContactPerson

   // Returns the musician contact person email
   getContactEmail(i_concert_number) 
   {
       if (this.getYearAutumnInt() < 2016) return "";

       return this.getConcertNodeValue(this.m_tags.getContactEmail(), i_concert_number);
       
   } // getContactEmail

   // Returns the musician contact person telephone number
   getContactTelephone(i_concert_number) 
   {
       if (this.getYearAutumnInt() < 2016) return "";

       return this.getConcertNodeValue(this.m_tags.getContactTelephone(), i_concert_number);
       
   } // getContactTelephone

   // Returns the musician contact person street name and number
   getContactStreet(i_concert_number) 
   {
       if (this.getYearAutumnInt() < 2016) return "";

       return this.getConcertNodeValue(this.m_tags.getContactStreet(), i_concert_number);
       
   } // getContactStreet

   // Returns the musician contact person post code
   getContactPostCode(i_concert_number) 
   {
       if (this.getYearAutumnInt() < 2016) return "";

       return this.getConcertNodeValue(this.m_tags.getContactPostCode(), i_concert_number);
       
   } // getContactPostCode

   // Returns the musician contact person city name
   getContactCity(i_concert_number) 
   {
       if (this.getYearAutumnInt() < 2016) return "";

       return this.getConcertNodeValue(this.m_tags.getContactCity(), i_concert_number);
       
   } // getContactCity

   // Returns the musician contact person IBAN number
   getIbanNumber(i_concert_number) 
   {
       if (this.getYearAutumnInt() < 2016) return "";

       return this.getConcertNodeValue(this.m_tags.getIbanNumber(), i_concert_number);
       
   } // getIbanNumber
 
   // Returns the musician contact person remark
   getContactRemark(i_concert_number) 
   {
       if (this.getYearAutumnInt() < 2016) return "";

       return this.getConcertNodeValue(this.m_tags.getContactRemark(), i_concert_number);
       
   } // getContactRemark

    ///////////////////////////////////////////////////////////////////////////
    /////// End Get Concert Functions ////////(////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Get Musician Functions ////////(/////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the musician name
    getMusicianName(i_concert_number, i_musician_number)
    {
        return this.getMusicianNodeValue(this.m_tags.getMusicianName(), i_concert_number, i_musician_number);
         
    } // getMusicianName

    // Returns the musician instrument
    getMusicianInstrument(i_concert_number, i_musician_number)
    {
        return this.getMusicianNodeValue(this.m_tags.getMusicianInstrument(), i_concert_number, i_musician_number);
         
    } // getMusicianInstrument

    // Returns the musician text
    getMusicianText(i_concert_number, i_musician_number)
    {
        return this.getMusicianNodeValue(this.m_tags.getMusicianText(), i_concert_number, i_musician_number);
         
    } // getMusicianText

    // Returns the musician gender
    getMusicianGender(i_concert_number, i_musician_number)
    {
        return this.getMusicianNodeValue(this.m_tags.getMusicianGender(), i_concert_number, i_musician_number);
         
    } // getMusicianGender 

    ///////////////////////////////////////////////////////////////////////////
    /////// End Get Musician Functions ////////(///////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Node Value Functions //////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the season node value for a given tag name
    getSeasonNodeValue(i_tag)
    {
        var ret_data = '';
        
        if (!this.checkSeasonXml()){ return ret_data; }

        var season_node = this.getXmlObject().getElementsByTagName(i_tag)[0];
        
        var season_node_value = this.getNodeValue(season_node);
        
        ret_data = this.removeFlagNodeValueNotSet(season_node_value);
        
        return ret_data;
        
    } // getSeasonNodeValue

    // Returns the concert node value for a given concert number and a tag name
    getConcertNodeValue(i_record_tag, i_concert_number)
    {
        var ret_data = '';
        
        if (!this.checkSeasonXml()){ return ret_data; }

        var n_records = this.getNumberOfConcerts();
        
        if (i_concert_number < 1 || i_concert_number > n_records)
        {
            alert("SeasonXml.getConcertNodeValue Record number is not between 1 and " + n_records.toString());
            return ret_data;		
        }
            
        var concert_rec_nodes = this.getXmlObject().getElementsByTagName(this.m_tags.getConcert());

        var concert_rec_node = concert_rec_nodes[i_concert_number-1];
        
        var xml_node_value = this.getNodeValueTagName(concert_rec_node, i_record_tag);
        
        ret_data = this.removeFlagNodeValueNotSet(xml_node_value);
        
        return ret_data;
        
    } // getConcertNodeValue

    // Returns a musician node value for a musician tag, musician number and concert number
    getMusicianNodeValue(i_musician_tag, i_concert_number, i_musician_number)
    {
        var ret_node_value = '';
        
        if (!this.checkSeasonXml()){ return ret_node_value; }
        
        var n_concerts = this.getNumberOfConcerts();
        
        if (i_concert_number < 1 || i_concert_number > n_concerts)
        {
            alert("SeasonXml.getMusicianNodeValue Concert number not between 1 and " + n_concerts.toString());
            return ret_data;		
        }
            
        var concert_nodes = this.getXmlObject().getElementsByTagName(this.m_tags.getConcert());

        var concert_node = concert_nodes[i_concert_number-1];
        
        var musician_nodes = concert_node.getElementsByTagName(this.m_tags.getMusician());
        
        if (i_musician_number < 1 || i_musician_number > musician_nodes.length)
        {
            alert("SeasonXml.getMusicianNodeValue Musician number is not between 1 and " + musician_nodes.length.toString());
            return ret_node_value;
        }

        var musician_node = musician_nodes[i_musician_number - 1];
        
        var musician_node_value = this.getNodeValueTagName(musician_node, i_musician_tag);
        
        ret_node_value = this.removeFlagNodeValueNotSet(musician_node_value);
        
        return ret_node_value;
        
    } // getMusicianNodeValue

    // Returns the node value. Input is an XML node and the tag name
    getNodeValueTagName(i_node, i_xml_tag)
    {	
        return i_node.getElementsByTagName(i_xml_tag)[0].childNodes[0].nodeValue;
        
    } // getNodeValueTagName

    // Returns the node value. Input is an XML node 
    getNodeValue(i_node)
    {	
        return i_node.childNodes[0].nodeValue;
        
    } // getNodeValue

    // Sets a node value. Input is an XML node, the tag name and the node value
    setNodeValue(i_node, i_xml_tag, i_node_value)
    {	
        i_node.getElementsByTagName(i_xml_tag)[0].childNodes[0].nodeValue = i_node_value;
        
    } // setNodeValue

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Node Value Functions ////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Not Set Values  ///////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns true if the node value is set
    nodeValueIsSet(i_node_value)
    {
        if (i_node_value == this.m_not_yet_set_node_value)
        {
            return false;
        }
        else
        {
            return true;
        }
        
    } // nodeValueIsSet

    // Returns empty string if i_node_value is equal to m_not_yet_set_node_value
    removeFlagNodeValueNotSet(i_node_value)
    {
        if (!this.nodeValueIsSet(i_node_value))
        {
            return "";
        }
        
        return i_node_value; 
        
    } // removeFlagNodeValueNotSet

    // Return flag (string) g_not_yet_set_node_value if input string is empty
    setFlagNodeValueIsNotSetForEmptyString(i_node_value)
    {
        var trimmed_node_value = i_node_value.trim();
        
        if (trimmed_node_value.length == 0)
        {
            return this.m_not_yet_set_node_value;
        }
        
        return i_node_value;

    } // setFlagNodeValueIsNotSetForEmptyString

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Not Set Values  /////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Number Records ////////////////////////////
    //////////////////////////////////////////////////////////////////////////

    // Returns the number of concerts
    getNumberOfConcerts()
    {
        var ret_n_records = -1;

        if (!this.checkSeasonXml()){ return ret_n_records; }

        var concert_rec_nodes = this.getXmlObject().getElementsByTagName(this.m_tags.getConcert());

        ret_n_records = concert_rec_nodes.length;

        return ret_n_records;

    } // getNumberOfConcerts

    // Returns the number of musicians
    getNumberOfMusicians(i_concert_number)
    {
        var ret_n_records = -1;

        if (!this.checkSeasonXml()){ return ret_n_records; }

        var concert_rec_nodes = this.getXmlObject().getElementsByTagName(this.m_tags.getConcert());

        var n_concerts = concert_rec_nodes.length;
        
        if (i_concert_number < 1 || i_concert_number > n_concerts)
        {
            alert("SeasonXml.getNumberOfMusicians Concert number not between 1 and " + n_concerts.toString());
            return ret_data;		
        }        
        
        var concert_node = concert_rec_nodes[i_concert_number-1];

        var musician_nodes = concert_node.getElementsByTagName(this.m_tags.getMusician());
	
        ret_n_records = musician_nodes.length;

        return ret_n_records;

    } // getNumberOfMusicians
  
    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Number Records //////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Load Functions //////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Load the XML file.
    // https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
    // i_object_xml is the instance of this class. Call of this.setXmlObject
    // does not work, while this= jazz_xmlhttp 
    loadOneXmlFile(i_object_xml, i_path_file_name_xml, i_callback_function_name)
    {
    // Request server object for the XML file
    var jazz_xmlhttp = new XMLHttpRequest();
    
    // Event function: The server will return state and status 
    // from object functions open and send.
    jazz_xmlhttp.onreadystatechange = function() 
    {
        if (jazz_xmlhttp.readyState == 4 && jazz_xmlhttp.status == 200) 
        {
            var xml_object = jazz_xmlhttp.responseXML;

            i_object_xml.setXmlObject(xml_object);

            i_callback_function_name();    
        }
        else if (jazz_xmlhttp.readyState == 4 && jazz_xmlhttp.status == 404) 
        {
            alert("Error 404: File " + i_path_file_name_xml + " not found" );
        }	
    };
    
    // Open the file
    jazz_xmlhttp.open("GET", i_path_file_name_xml, true);
    
    jazz_xmlhttp.setRequestHeader('Cache-Control', 'no-cache');
        
    jazz_xmlhttp.send();	

    } // loadOneXmlFile

    ///////////////////////////////////////////////////////////////////////////
    /////// End Load Functions ////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Utility Functions ///////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the XML season file name and path
    getXmlSeasonFileName()
    {
        var ret_file_name = '';

        var level_xml_str = '';

        if (0 == this.m_n_level_xml)
        {
            level_xml_str = 'XML/';
        }
        else if (1 == this.m_n_level_xml)
        {
            level_xml_str = '../XML/';
        }
        else if (2 == this.m_n_level_xml)
        {
            level_xml_str = '../../XML/';
        }
        else if (3 == this.m_n_level_xml)
        {
            level_xml_str = '../../../XML/';
        }
        else
        {
            alert("SeasonXml.getXmlSeasonFileName i_n_level= " + 
            this.m_n_level_xml.toString() + " not between 0 and 3");

            return ret_file_name;
        }

        ret_file_name = level_xml_str + SeasonXml.getSeasonFileNameWithoutPath(this.m_start_year);

        if (!JazzGuestsXml.execApplicationOnServer())
        {
            var level_test_str = '';

            if (2 == this.m_n_level_xml)
            {
                level_test_str = '../';
            }
            else if (3 == this.m_n_level_xml)
            {
                level_test_str = '../../';
            }

            return level_test_str + this.m_xml_file_name_local;
        }        

        return ret_file_name;

    } // getXmlSeasonFileName

    // Reurns the season file name without path
    static getSeasonFileNameWithoutPath(i_start_year)
    {
      var next_year = i_start_year + 1;
    
      var file_name = 'JazzProgramm_' + i_start_year.toString() + '_' + next_year.toString() + '.xml';
    
      return file_name;
    
    }// getSeasonFileNameWithoutPath

    // Check that the season program XML object is set
    checkSeasonXml()
    {      
        if (null == this.getXmlObject())
        {
            alert("SeasonXml.checkSeasonXml Jazz guests XML object is null");

            return false;
        }	
        else
        {
            return true;
        }
        
    } // checkSeasonXml

    // Returns true if the application runs on the server
    static execApplicationOnServer()
    {
        var current_base = window.location.href;

        var server_url = 'jazzliveaarau.ch';

        var index_url = current_base.indexOf(server_url);

        if (index_url >= 0) 
        {
            return true;
        }
        else
        {
            return false;
        }

    } // execApplicationOnServer

    // Get the current season start year
    // Season changes 1/4
    static getCurrentSeasonStartYear()
    {
    
      var now_date = new Date();
      var now_year = now_date.getFullYear();
      var now_month = now_date.getMonth() + 1;
    
      var ret_current_season_start_year = now_year;
      
      if (now_month < 4)
      {
        ret_current_season_start_year = now_year - 1;
      }
    
      return ret_current_season_start_year;
    
    } // getCurrentSeasonStartYear

    ///////////////////////////////////////////////////////////////////////////
    /////// End Utility Functions /////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

} // SeasonXml

// Class defining the tags of the XML season program file
class SeasonTags 
{
    // Creates the instance of the class
    constructor() 
    {
        //////////////////////////////////////////////////////////
        ////////////// Season Start //////////////////////////////
        //////////////////////////////////////////////////////////

        this.m_tag_year_autumn = "YearAutum";
        this.m_tag_year_spring = "YearSpring";
        this.m_tag_publish_program = "PublishProgram";

        //////////////////////////////////////////////////////////
        ////////////// Season End ////////////////////////////////
        //////////////////////////////////////////////////////////

        //////////////////////////////////////////////////////////
        ////////////// Concert Start /////////////////////////////
        //////////////////////////////////////////////////////////

        this.m_tag_concert = "Concert";
        this.m_tag_day_name = "DayName";
        this.m_tag_day = "Day";
        this.m_tag_month = "Month";
        this.m_tag_year = "Year";
        this.m_tag_start_hour = "TimeStartHour";
        this.m_tag_start_minute = "TimeStartMinute";
        this.m_tag_end_hour = "TimeEndHour";
        this.m_tag_end_minute = "TimeEndMinute";
        this.m_tag_place = "Place";
        this.m_tag_publish_flyer_text = "PublishFlyerText";
        this.m_tag_concert_cancelled = "ConcertCancelled";
        this.m_tag_band_name = "BandName";
        this.m_tag_short_text = "ShortText";
        this.m_tag_additional_text = "AdditionalText";
        this.m_tag_band_website = "BandWebsite";
        this.m_tag_band_sound_sample = "SoundSample";
        this.m_tag_label_additional_text = "LabelAdditionalText";

        this.m_tag_label_flyer_text = "LabelFlyerText";
        this.m_tag_flyer_text = "FlyerText";
        this.m_tag_flyer_text_homepage_publish = "FlyerTextHomepagePublish";

        this.m_tag_poster_mid_size = 'PosterMidSize';
        this.m_tag_poster_small_size = 'PosterSmallSize';
        this.m_tag_photo_gallery_one = 'PhotoGalleryOne';
        this.m_tag_photo_gallery_two = 'PhotoGalleryTwo';
        this.m_tag_photo_gallery_one_zip = 'PhotoGalleryOneZip';
        this.m_tag_photo_gallery_two_zip = 'PhotoGalleryTwoZip';

        this.m_tag_contact_person = "ContactPerson";
        this.m_tag_contact_email = "ContactEmail";
        this.m_tag_contact_telephone = "ContactTelephone";
        this.m_tag_contact_street = "ContactStreet";
        this.m_tag_contact_post_code = "ContactPostCode";
        this.m_tag_contact_city = "ContactCity";
        this.m_tag_contact_iban_number = "IbanNumber";
        this.m_tag_contact_remark = "ContactRemark";

        //////////////////////////////////////////////////////////
        ////////////// Concert End ///////////////////////////////
        //////////////////////////////////////////////////////////

        //////////////////////////////////////////////////////////
        ////////////// Musicians Start ///////////////////////////
        //////////////////////////////////////////////////////////

        this.m_tag_musician = "Musician";
        this.m_tag_musician_name = "Name";
        this.m_tag_musician_instrument = "Instrument";
        this.m_tag_musician_text = "Text";
        this.m_tag_musician_gender = "Gender";

        //////////////////////////////////////////////////////////
        ////////////// Musicians End /////////////////////////////
        //////////////////////////////////////////////////////////

    } // constructor

    // Get member variable functions
    // =============================

    getYearAutumn(){return this.m_tag_year_autumn;} 
    getYearSpring(){return this.m_tag_year_spring;} 
    getPublishProgram(){return this.m_tag_publish_program;} 


    getConcert(){return this.m_tag_concert;} 
    getDayName(){return this.m_tag_day_name;} // Previously getConcertDayName
    getDay(){return this.m_tag_day;} // Previously getConcertDay
    getMonth(){return this.m_tag_month;} // Previously getConcertMonth
    getYear(){return this.m_tag_year;} // Previously getConcertYear
    getStartHour(){return this.m_tag_start_hour;} // Previously getConcertStartHour
    getStartMinute(){return this.m_tag_start_minute;} // Previously getConcertStartMinute
    getEndHour(){return this.m_tag_end_hour;} // Previously getConcertEndHour
    getEndMinute(){return this.m_tag_end_minute;} // Previously getConcertEndMinute
    getPlace(){return this.m_tag_place;} // Previously getConcertPlace

    getCancelled(){return this.m_tag_concert_cancelled;} // Not defined in old (before 2019) season programs // Previously getConcertCancelled
    getBandName(){return this.m_tag_band_name;} 
    getShortText(){return this.m_tag_short_text;} // Previously getConcertShortText
    getAdditionalText(){return this.m_tag_additional_text;} // Previously getConcertAdditionalText
    getBandWebsite(){return this.m_tag_band_website;} 
    getSoundSample(){return this.m_tag_band_sound_sample;} 

    getLabelAdditionalText(){return this.m_tag_label_additional_text;} // TODO Not used previously
    getLabelFlyerText(){return this.m_tag_label_flyer_text;} 
    getFlyerText(){return this.m_tag_flyer_text;}
    getFlyerTextHomepagePublish(){return this.m_tag_publish_flyer_text;} // Only defined after 2019

    getPosterMidSize(){return this.m_tag_poster_mid_size;} 
    getPosterSmallSize(){return this.m_tag_poster_small_size;} 
    getPhotoGalleryOne(){return this.m_tag_photo_gallery_one;} 
    getPhotoGalleryTwo(){return this.m_tag_photo_gallery_two;} 
    getPhotoGalleryOneZip(){return this.m_tag_photo_gallery_one_zip;} 
    getPhotoGalleryTwoZip(){return this.m_tag_photo_gallery_two_zip;} 

    getContactPerson(){return this.m_tag_contact_person;}  // Not defined before 2016
    getContactEmail(){return this.m_tag_contact_email;}  // Not defined before 2016
    getContactTelephone(){return this.m_tag_contact_telephone;} // Not defined before 2016
    getContactStreet(){return this.m_tag_contact_street;} // Not defined before 2016
    getContactPostCode(){return this.m_tag_contact_post_code;} // Not defined before 2016
    getContactCity(){return this.m_tag_contact_city;} // Not defined before 2016
    getIbanNumber(){return this.m_tag_contact_iban_number;} // Not defined before 2016
    getContactRemark(){return this.m_tag_contact_remark;} // Not defined before 2016

    getMusician(){return this.m_tag_musician;} 
    getMusicianName(){return this.m_tag_musician_name;} 
    getMusicianInstrument(){return this.m_tag_musician_instrument;} 
    getMusicianText(){return this.m_tag_musician_text;} 
    getMusicianGender(){return this.m_tag_musician_gender;} 


} // SeasonTags


