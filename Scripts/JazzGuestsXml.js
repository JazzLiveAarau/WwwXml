// File: JazzGuestsXml.js
// Date: 2023-10-14
// Author: Gunnar Lidén

// File content
// =============
//
// Class for the jazz guests XML file JazzGuests.xml
class JazzGuestsXml
{
    // Creates the instance of the class
    // i_callback_function_name: Function that shall be called after loading
    // i_n_level_xml:            Directory levels to /www/XML/
    constructor(i_callback_function_name, i_n_level_xml) 
    {
        // Member variables
        // ================

        // Call back function name
        this.m_callback_function_name = i_callback_function_name;

        // Directory levels to /www/XML/
        this.m_n_level_xml = i_n_level_xml;

        // Path and name of XML file in the computer
        this.m_xml_file_name_local = 'XmlTestData/JazzGuestsTestData.xml';

        // The jazz application xml object
        this.m_object_xml = null;

        // Object holding the tags
        this.m_tags = new JazzGuestsTags();

        // Flag that a node value not have been set
        this.m_not_yet_set_node_value = "NotYetSetNodeValue";

        // Loads the XML object for aapplication file and calls the function m_callback_function_name
        this.loadOneXmlFile(this, this.getXmlJazzGuestsFileName(), this.m_callback_function_name);

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
    ///////////////////////// Start Member Data ///////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the guest record year
    getGuestYear(i_record_number)
    {
        return this.getGuestNodeValue(this.m_tags.getGuestYear(), i_record_number);
        
    } // getGuestYear

    // Returns the guest record month
    getGuestMonth(i_record_number)
    {
        return this.getGuestNodeValue(this.m_tags.getGuestMonth(), i_record_number);
        
    } // getGuestMonth

    // Returns the guest record day
    getGuestDay(i_record_number)
    {
        return this.getGuestNodeValue(this.m_tags.getGuestDay(), i_record_number);
        
    } // getGuestDay

    // Returns the guest record header
    getGuestHeader(i_record_number)
    {
        return this.getGuestNodeValue(this.m_tags.getGuestHeader(), i_record_number);
        
    } // getGuestHeader

    // Returns the guest record text
    getGuestText(i_record_number)
    {
        return this.getGuestNodeValue(this.m_tags.getGuestText(), i_record_number);
        
    } // getGuestText

    // Returns the guest record names
    getGuestNames(i_record_number)
    {
        return this.getGuestNodeValue(this.m_tags.getGuestNames(), i_record_number);
        
    } // getGuestNames

    // Returns the guest record remark
    getGuestRemark(i_record_number)
    {
        return this.getGuestNodeValue(this.m_tags.getGuestRemark(), i_record_number);
        
    } // getGuestRemark

    // Returns the guest record file name
    getGuestFileName(i_record_number)
    {
        return this.getGuestNodeValue(this.m_tags.getGuestFileName(), i_record_number);
        
    } // getGuestFileName

    // Returns the guest record file type
    getGuestFileType(i_record_number)
    {
        return this.getGuestNodeValue(this.m_tags.getGuestFileType(), i_record_number);
        
    } // getGuestFileType

    // Returns the guest record avatar
    getGuestAvatar(i_record_number)
    {
        return this.getGuestNodeValue(this.m_tags.getGuestAvatar(), i_record_number);
        
    } // getGuestAvatar

    // Returns the guest record email
    getGuestEmail(i_record_number)
    {
        return this.getGuestNodeValue(this.m_tags.getGuestEmail(), i_record_number);
        
    } // getGuestEmail

    // Returns the guest record publish flag
    getGuestPublish(i_record_number)
    {
        return this.getGuestNodeValue(this.m_tags.getGuestPublish(), i_record_number);
        
    } // getGuestPublish

    // Returns the guest record registration
    getGuestRegNumber(i_record_number)
    {
        return this.getGuestNodeValue(this.m_tags.getGuestRegNumber(), i_record_number);
        
    } // getGuestRegNumber

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Member Data /////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Utility Functions /////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Get an array of record numbers with file type IMG that can be published
    getRecordsImageArray()
    {
        var record_numbers_image_array = [];
    
        var index_out = -1;
    
        var n_records = this.getNumberOfGuestRecords();
    
        for (var record_number=1; record_number <= n_records; record_number++)
        {
    
            var file_type =  this.getGuestFileType(record_number);

            var record_publish =  this.getGuestPublish(record_number);
    
            if (file_type == 'IMG' && record_publish == "TRUE")
            {
                index_out = index_out + 1;
    
                record_numbers_image_array[index_out] = record_number;
            }
           
        } // record_number
    
        if (index_out == -1)
        {
            alert("JazzGuestsXml.getRecordsImageArray failed");
    
            return null;
        }

        return record_numbers_image_array;
    
    } // getRecordsImageArray

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Member Utility Functions ////////////////////
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

    } // jazzUtilLoadXml

    ///////////////////////////////////////////////////////////////////////////
    /////// End Load Functions ////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Number Guest Items  ///////////////////////
    //////////////////////////////////////////////////////////////////////////

    // Returns the number of guest records
    getNumberOfGuestRecords()
    {
        var ret_n_records = -1;

        if (!this.checkJazzGuestsXml()){ return ret_n_records; }

        var guest_rec_nodes = this.getXmlObject().getElementsByTagName(this.m_tags.getGuest());

        ret_n_records = guest_rec_nodes.length;

        return ret_n_records;

    } // getNumberOfGuestRecords
  

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Number Guest Items //////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Record Node Value  ////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the guest node value for a given guest record number and a tag name
    getGuestNodeValue(i_record_tag, i_record_number)
    {
        var ret_data = '';
        
        if (!this.checkJazzGuestsXml()){ return ret_data; }

        var n_records = this.getNumberOfGuestRecords();
        
        if (i_record_number < 1 || i_record_number > n_records)
        {
            alert("JazzGuestsXml.getNodeValue Record number is not between 1 and " + n_records.toString());
            return ret_data;		
        }
            
        var guest_rec_nodes = this.getXmlObject().getElementsByTagName(this.m_tags.getGuest());

        var guest_rec_node = guest_rec_nodes[i_record_number-1];
        
        var xml_node_value = this.getNodeValueTagName(guest_rec_node, i_record_tag);
        
        ret_data = this.removeFlagNodeValueNotSet(xml_node_value);
        
        return ret_data;
        
    } // getGuestNodeValue

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Record Node Value  //////////////////////////
    ///////////////////////////////////////////////////////////////////////////  

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start XML Node Values  //////////////////////////
    ///////////////////////////////////////////////////////////////////////////

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

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End XML Node Values  ////////////////////////////
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

    ///////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Not Set Values  /////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Utility Functions ///////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the XML jazz guests file name and path
    getXmlJazzGuestsFileName()
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
            alert("JazzGuestsXml.getXmlJazzGuestsFileName i_n_level= " + 
            this.m_n_level_xml.toString() + " nicht between 0 and 3");

            return ret_file_name;
        }

        ret_file_name = level_xml_str + 'JazzGuests.xml';

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

    } // getXmlJazzGuestsFileName

    // Check that the season program XML object is set
    checkJazzGuestsXml()
    {      
        if (null == this.getXmlObject())
        {
            alert("JazzGuestsXml.checkJazzGuestsXml Jazz guests XML object is null");

            return false;
        }	
        else
        {
            return true;
        }
        
    } // checkJazzGuestsXml

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

    ///////////////////////////////////////////////////////////////////////////
    /////// End Utility Functions /////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

} // JazzGuestsXml

// Class defining the tags of the XML application file
class JazzGuestsTags 
{
    // Creates the instance of the class
    constructor() 
    {
        this.m_tag_guests = "HomepageJazzGuests";
        this.m_tag_guest = "JazzGuest";
        this.m_tag_guest_year = "JazzGuestYear";
        this.m_tag_guest_month = "JazzGuestMonth";
        this.m_tag_guest_day = "JazzGuestDay";
        this.m_tag_guest_header = "JazzGuestHeader";
        this.m_tag_guest_text = "JazzGuestText";
        this.m_tag_guest_names = "JazzGuestNames";
        this.m_tag_guest_remark = "JazzGuestRemark";
        this.m_tag_guest_file_name = "JazzGuestFileName";
        this.m_tag_guest_file_type = "JazzGuestFileType";
        this.m_tag_guest_avatar = "JazzGuestAvatar";
        this.m_tag_guest_email = "JazzGuestEmail";
        this.m_tag_guest_publish = "JazzGuestPublish";
        this.m_tag_guest_number = "JazzGuestRegNumber";

    } // constructor

    // Get member variable functions
    // =============================

    getGuest(){return this.m_tag_guest;} 
    getGuestYear(){return this.m_tag_guest_year;} 
    getGuestMonth(){return this.JazzGuestMonth;} 
    getGuestDay(){return this.m_tag_guest_day;} 
    getGuestHeader(){return this.m_tag_guest_header;} 
    getGuestText(){return this.m_tag_guest_text;} 
    getGuestNames(){return this.m_tag_guest_names;} 
    getGuestRemark(){return this.m_tag_guest_remark;} 
    getGuestFileName(){return this.m_tag_guest_file_name;}
    getGuestFileType(){return this.m_tag_guest_file_type;}
    getGuestAvatar(){return this.m_tag_guest_avatar;}
    getGuestEmail(){return this.m_tag_guest_email;}
    getGuestPublish(){return this.m_tag_guest_publish;}
    getGuestRegNumber(){return this.m_tag_guest_number;}

} // JazzGuestsTags

