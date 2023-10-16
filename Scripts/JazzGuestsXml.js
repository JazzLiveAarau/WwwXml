// File: JazzGuestsXml.js
// Date: 2023-10-16
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
    ///////////////////////// Start Get Guest Data ////////////////////////////
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

    // Returns the guest record publish flag as string
    getGuestPublish(i_record_number)
    {
        return this.getGuestNodeValue(this.m_tags.getGuestPublish(), i_record_number);
        
    } // getGuestPublish

    // Returns the guest record publish flag as boolean
    getGuestPublishBool(i_record_number)
    {
        var flag_str = this.getGuestPublish(i_record_number);

        if ("TRUE" == flag_str)
        {
            return true;
        }
        else
        {
            return false;
        }
        
    } // getGuestPublishBool

    // Returns the guest record registration as string
    getGuestRegNumber(i_record_number)
    {
        return this.getGuestNodeValue(this.m_tags.getGuestRegNumber(), i_record_number);
        
    } // getGuestRegNumber

    // Returns the guest record registration as integer
    getGuestRegNumberInt(i_record_number)
    {
        var node_value_str = this.getGuestRegNumber(i_record_number);

        return parseInt(node_value_str);
        
    } // getGuestRegNumberInt

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Get Guest Data //////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Set Guest Data ////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Sets the guest record year
    setGuestYear(i_record_number, i_node_value)
    {
        return this.setGuestNodeValue(this.m_tags.getGuestYear(), i_record_number, i_node_value);
        
    } // setGuestYear


    // Sets the guest record month
    setGuestMonth(i_record_number, i_node_value)
    {
        return this.setGuestNodeValue(this.m_tags.getGuestMonth(), i_record_number, i_node_value);
        
    } // setGuestMonth

    // Sets the guest record day
    setGuestDay(i_record_number, i_node_value)
    {
        return this.setGuestNodeValue(this.m_tags.getGuestDay(), i_record_number, i_node_value);
        
    } // setGuestDay

    // Sets the guest record header
    setGuestHeader(i_record_number, i_node_value)
    {
        return this.setGuestNodeValue(this.m_tags.getGuestHeader(), i_record_number, i_node_value);
        
    } // setGuestHeader

    // Sets the guest record text
    setGuestText(i_record_number, i_node_value)
    {
        return this.setGuestNodeValue(this.m_tags.getGuestText(), i_record_number, i_node_value);
        
    } // setGuestText

    // Sets the guest record names
    setGuestNames(i_record_number, i_node_value)
    {
        return this.setGuestNodeValue(this.m_tags.getGuestNames(), i_record_number, i_node_value);
        
    } // setGuestNames

    // Sets the guest record remark
    setGuestRemark(i_record_number, i_node_value)
    {
        return this.setGuestNodeValue(this.m_tags.getGuestRemark(), i_record_number, i_node_value);
        
    } // setGuestRemark

    // Sets the guest record file name
    setGuestFileName(i_record_number, i_node_value)
    {
        return this.setGuestNodeValue(this.m_tags.getGuestFileName(), i_record_number, i_node_value);
        
    } // setGuestFileName

   // Sets the guest record file type
   setGuestFileType(i_record_number, i_node_value)
   {
       return this.setGuestNodeValue(this.m_tags.getGuestFileType(), i_record_number, i_node_value);
       
   } // setGuestFileType

   // Sets the guest record avatar
   setGuestAvatar(i_record_number, i_node_value)
   {
       return this.setGuestNodeValue(this.m_tags.getGuestAvatar(), i_record_number, i_node_value);
       
   } // setGuestAvatar

   // Sets the guest record email
   setGuestEmail(i_record_number, i_node_value)
   {
       return this.setGuestNodeValue(this.m_tags.getGuestEmail(), i_record_number, i_node_value);
       
   } // setGuestEmail

   // Sets the guest record publish flag as string
   setGuestPublish(i_record_number, i_node_value)
   {
       return this.setGuestNodeValue(this.m_tags.getGuestPublish(), i_record_number, i_node_value);
       
   } // setGuestPublish

   // Sets the guest record publish flag as string
   setGuestPublishBool(i_record_number, i_node_value_boolean)
   {
      if (i_node_value_boolean)
      {
          this.setGuestPublish(i_record_number, "TRUE");
      }
      else
      {
          this.setGuestPublish(i_record_number, "FALSE");
      }
       
   } // setGuestPublishBool

   // Sets the guest record registration number as string
   setGuestRegNumber(i_record_number, i_node_value)
   {
       return this.setGuestNodeValue(this.m_tags.getGuestRegNumber(), i_record_number, i_node_value);
       
   } // setGuestRegNumber

   // Sets the guest record registration number as int
   setGuestRegNumberInt(i_record_number, i_node_value_int)
   {
       var node_value_str = i_node_value_int.toString();

       return this.setGuestRegNumber(i_record_number, node_value_str);
       
   } // setGuestRegNumberInt

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Set Guest Data //////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////////////////////////
	///////////////////////// Start Append Guest Node  ////////////////////////
    ///////////////////////////////////////////////////////////////////////////

	// https://www.webdeveloper.com/forum/d/231973-append-xml-node-in-javascript/3

	// Appends a guest node   
    appendGuestNode()
    {
        var new_guest = this.getXmlObject().createElement(this.m_tags.getGuest());

        var year_node = this.getXmlObject().createElement(this.m_tags.getGuestYear());
        var year_text = this.getXmlObject().createTextNode(this.m_not_yet_set_node_value);
        year_node.appendChild(year_text);
        new_guest.appendChild(year_node);

        var month_node = this.getXmlObject().createElement(this.m_tags.getGuestMonth());
        var month_text = this.getXmlObject().createTextNode(this.m_not_yet_set_node_value);
        month_node.appendChild(month_text);
        new_guest.appendChild(month_node);

        var day_node = this.getXmlObject().createElement(this.m_tags.getGuestDay());
        var day_text = this.getXmlObject().createTextNode(this.m_not_yet_set_node_value);
        day_node.appendChild(day_text);
        new_guest.appendChild(day_node);

        var header_node = this.getXmlObject().createElement(this.m_tags.getGuestHeader());
        var header_text = this.getXmlObject().createTextNode(this.m_not_yet_set_node_value);
        header_node.appendChild(header_text);
        new_guest.appendChild(header_node);

        var text_node = this.getXmlObject().createElement(this.m_tags.getGuestText());
        var text_text = this.getXmlObject().createTextNode(this.m_not_yet_set_node_value);
        text_node.appendChild(text_text);
        new_guest.appendChild(text_node);

        var names_node = this.getXmlObject().createElement(this.m_tags.getGuestNames());
        var names_text = this.getXmlObject().createTextNode(this.m_not_yet_set_node_value);
        names_node.appendChild(names_text);
        new_guest.appendChild(names_node);

        var remark_node = this.getXmlObject().createElement(this.m_tags.getGuestRemark());
        var remark_text = this.getXmlObject().createTextNode(this.m_not_yet_set_node_value);
        remark_node.appendChild(remark_text);
        new_guest.appendChild(remark_node);

        var file_name_node = this.getXmlObject().createElement(this.m_tags.getGuestFileName());
        var file_name_text = this.getXmlObject().createTextNode(this.m_not_yet_set_node_value);
        file_name_node.appendChild(file_name_text);
        new_guest.appendChild(file_name_node);

        var file_type_node = this.getXmlObject().createElement(this.m_tags.getGuestFileType());
        var file_type_text = this.getXmlObject().createTextNode(this.m_not_yet_set_node_value);
        file_type_node.appendChild(file_type_text);
        new_guest.appendChild(file_type_node);

        var avatar_node = this.getXmlObject().createElement(this.m_tags.getGuestAvatar());
        var avatar_text = this.getXmlObject().createTextNode(this.m_not_yet_set_node_value);
        avatar_node.appendChild(avatar_text);
        new_guest.appendChild(avatar_node);

        var email_node = this.getXmlObject().createElement(this.m_tags.getGuestEmail());
        var email_text = this.getXmlObject().createTextNode(this.m_not_yet_set_node_value);
        email_node.appendChild(email_text);
        new_guest.appendChild(email_node);

        var publish_node = this.getXmlObject().createElement(this.m_tags.getGuestPublish());
        var publish_text = this.getXmlObject().createTextNode(this.m_not_yet_set_node_value);
        publish_node.appendChild(publish_text);
        new_guest.appendChild(publish_node);

        var reg_number_node = this.getXmlObject().createElement(this.m_tags.getGuestRegNumber());
        var reg_number_text = this.getXmlObject().createTextNode(this.m_not_yet_set_node_value);
        reg_number_node.appendChild(reg_number_text);
        new_guest.appendChild(reg_number_node);

        this.getXmlObject().documentElement.appendChild(new_guest);	

    } // appendGuestNode
	   
	///////////////////////////////////////////////////////////////////////////
	///////////////////////// End Append Guest Node  //////////////////////////
    ///////////////////////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////////////////////////
	///////////////////////// Start Delete Guest Node  ////////////////////////
    ///////////////////////////////////////////////////////////////////////////

	// Deletes a guest node   
    deleteGuestNode(i_record_number)
    {
        if (!this.checkJazzGuestsXml()){ return false; }

        var n_records = this.getNumberOfGuestRecords();
        
        if (i_record_number < 1 || i_record_number > n_records)
        {
            alert("JazzGuestsXml.deleteGuestNode Record number is not between 1 and " + n_records.toString());
            return false;		
        }

        var guest_rec_nodes = this.getXmlObject().getElementsByTagName(this.m_tags.getGuest());

        var guest_rec_node = guest_rec_nodes[i_record_number-1];

        guest_rec_node.parentNode.removeChild(guest_rec_node);

    } // deleteGuestNode

	///////////////////////////////////////////////////////////////////////////
	///////////////////////// End Delete Guest Node  //////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Utility Functions /////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Initialize the last (appended) gust node for a file of type IMG
    initAppendedForImg()
    {
        var n_records = this.getNumberOfGuestRecords();

        var current_date = new Date();
        var current_year = current_date.getFullYear();
        var current_month = current_date.getMonth() + 1;
        var current_day = current_date.getDate();

        this.setGuestYear(n_records, current_year.toString());

        this.setGuestMonth(n_records, current_month.toString());

        this.setGuestDay(n_records, current_day.toString());

        this.setGuestFileType(n_records, "IMG");

        this.setGuestPublishBool(n_records, false);

        this.setGuestRegNumberInt(n_records, this.getNextRegNumberInt());

    } // initAppendedForImg

    getNextRegNumberInt()
    {
        var n_records = this.getNumberOfGuestRecords();

        var max_record_number = -1;

        for (var record_number=1; record_number <= n_records; record_number++)
        {
            var reg_number_str = this.getGuestRegNumber(record_number);

            if (reg_number_str.length > 1) // Only last one may not be set
            {
                var reg_number_int = this.getGuestRegNumberInt(record_number);

                if (reg_number_int > max_record_number)
                {
                    max_record_number = reg_number_int;
                }

            } // defined
        } // record_number

        var ret_number_int = max_record_number + 1;

        return ret_number_int;

    } // getNextRegNumberInt

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

    // Sets the guest node value for a given guest record number and a tag name
    setGuestNodeValue(i_record_tag, i_record_number, i_guest_record_node_value)
    {	
        if (!this.checkJazzGuestsXml()){ return; }

        var n_records = this.getNumberOfGuestRecords();
        
        if (i_record_number < 1 || i_record_number > n_records)
        {
            alert("JazzGuestsXml.setJazzTaskNodeValue Record number is not between 1 and " + n_records.toString());
            
            return;		
        }
            
        var guest_rec_nodes = this.getXmlObject().getElementsByTagName(this.m_tags.getGuest());

        var guest_rec_node = guest_rec_nodes[i_record_number-1];
        
        var node_value = this.setFlagNodeValueIsNotSetForEmptyString(i_guest_record_node_value);
        
        this.setNodeValue(guest_rec_node, i_record_tag, node_value);
        
    } // setGuestNodeValue

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

    // Sets a node value. Input is an XML node, the tag name and the node value
    setNodeValue(i_node, i_xml_tag, i_node_value)
    {	
        i_node.getElementsByTagName(i_xml_tag)[0].childNodes[0].nodeValue = i_node_value;
        
    } // setNodeValue

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
    getGuestMonth(){return this.m_tag_guest_month;} 
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

