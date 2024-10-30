// File: ApplicationsVersionXml.js
// Date: 2024-10-30
// Author: Gunnar Lidén

// File content
// =============
//
// Class for the handling of applications versions
class ApplicationsVersion
{
    // Creates the instance of the class
    // i_callback_function_name: Function that shall be called after loading. '' is erlaubt
    // i_url_relative_dir:       Relative URL to the directory ApplicationsVersion
    // 
    constructor(i_callback_function_name, i_url_relative_dir) 
    {
        // Member variables
        // ================

        // Call back function name
        this.m_callback_function_name = i_callback_function_name;

        // Directory levels to /www/XML/
        //QQthis.m_n_level_xml = i_n_level_xml;

        // Relative URL to the directory ApplicationsVersion
        this.m_url_relative_dir = i_url_relative_dir;

        // Path and name of XML file in the computer
        this.m_xml_file_name_local = 'XmlTestData/ApplicationsVersionTestData.xml';

        // The jazz application xml object
        this.m_object_xml = null;

        // Object holding the tags
        this.m_tags = new ApplicationsVersionTags();

        // Flag that a node value not have been set
        this.m_not_yet_set_node_value = "NotYetSetNodeValue";

        // Loads the XML object for applications versions file and calls the function m_callback_function_name
        this.loadOneXmlFile(this, this.getXmlApplicationsVersionFileName(), this.m_callback_function_name);

    } // constructor

    // Return some text
    static someText()
    {
        return 'Some text ....';
    }

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
    ///////////////////////// Start Get Application Data //////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the application name
    getApplicationName(i_record_number)
    {
        return this.getApplicatinVersionNodeValue(this.m_tags.getApplicationName(), i_record_number);
        
    } // getApplicationName

    // Returns the application URL
    getApplicationUrl(i_record_number)
    {
        return this.getApplicatinVersionNodeValue(this.m_tags.getApplicationUrl(), i_record_number);
        
    } // getApplicationUrl

    // Returns the application description
    getApplicationDescription(i_record_number)
    {
        return this.getApplicatinVersionNodeValue(this.m_tags.getApplicationDescription(), i_record_number);
        
    } // getApplicationDescription

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Get Application Data ////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Set Application Data //////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Sets the application name
    setApplicationName(i_record_number, i_node_value)
    {
        return this.setApplicatinVersionNodeValue(this.m_tags.getApplicationName(), i_record_number, i_node_value);
        
    } // setApplicationName


    // Sets the application URL
    setApplicationUrl(i_record_number, i_node_value)
    {
        return this.setApplicatinVersionNodeValue(this.m_tags.getApplicationUrl(), i_record_number, i_node_value);
        
    } // setApplicationUrl

    // Sets the application description
    setApplicationDescription(i_record_number, i_node_value)
    {
        return this.setApplicatinVersionNodeValue(this.m_tags.getApplicationDescription(), i_record_number, i_node_value);
        
    } // setApplicationDescription

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Set Application Data ////////////////////////
    ///////////////////////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////////////////////////
	///////////////////////// Start Append Application Version Node  //////////
    ///////////////////////////////////////////////////////////////////////////

	// https://www.webdeveloper.com/forum/d/231973-append-xml-node-in-javascript/3

	// Appends aa application version node   
    appendApplicationVersionNode()
    {
        var new_application = this.getXmlObject().createElement(this.m_tags.getApplication());

        var name_node = this.getXmlObject().createElement(this.m_tags.getApplicationName());
        var name_text = this.getXmlObject().createTextNode(this.m_not_yet_set_node_value);
        name_node.appendChild(name_text);
        new_application.appendChild(name_node);

        var url_node = this.getXmlObject().createElement(this.m_tags.getApplicationUrl());
        var url_text = this.getXmlObject().createTextNode(this.m_not_yet_set_node_value);
        url_node.appendChild(url_text);
        new_application.appendChild(url_node);

        var descr_node = this.getXmlObject().createElement(this.m_tags.getApplicationDescription());
        var descr_text = this.getXmlObject().createTextNode(this.m_not_yet_set_node_value);
        descr_node.appendChild(descr_text);
        new_application.appendChild(descr_node);

        this.getXmlObject().documentElement.appendChild(new_application);	

    } // appendApplicationVersionNode
	   
	///////////////////////////////////////////////////////////////////////////
	///////////////////////// End Append Application Version Node  ////////////
    ///////////////////////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////////////////////////
	///////////////////////// Start Delete Application Version Node  ////////// 
    ///////////////////////////////////////////////////////////////////////////

	// Deletes aa application version node   
    deleteApplicationVersionNode(i_record_number)
    {
        if (!this.checkApplicationsVersion()){ return false; }

        var n_records = this.getNumberOfApplicationVersionRecords();
        
        if (i_record_number < 1 || i_record_number > n_records)
        {
            alert("ApplicationsVersion.deleteApplicationVersionNode Record number is not between 1 and " + n_records.toString());
            return false;		
        }

        var application_rec_nodes = this.getXmlObject().getElementsByTagName(this.m_tags.getApplication());

        var application_rec_node = application_rec_nodes[i_record_number-1];

        application_rec_node.parentNode.removeChild(application_rec_node);

    } // deleteApplicationVersionNode

	///////////////////////////////////////////////////////////////////////////
	///////////////////////// End Delete Application Version Node  ////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Utility Functions /////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Get URL for a given application name
    getUrlByName(i_application_name)
    {
        var n_records = this.getNumberOfApplicationVersionRecords();

        for (var i_record=1; i_record <= n_records; i_record++)
        {
            var application_name = this.getApplicationName(i_record);

            if (application_name == i_application_name)
            {
                return this.getApplicationUrl(i_record);
            }

        }

        alert('ApplicatinVersion.getUrlByName A not defined name in the ApplicationsVersions.xml file: ' + i_application_name);

        return '';

    } // getUrlByName

    // Initialize the last (appended) applications version record
    initAppendedRecord()
    {
        var n_records = this.getNumberOfApplicationVersionRecords();

        this.setApplicationName(n_records, 'A name ... TODO');


    } // initAppendedRecord

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

            if (i_callback_function_name.length > 0)
            {
                i_callback_function_name(); 
            }  
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
    ///////////////////////// Start Number Application Version Records  ///////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the number of application version records
    getNumberOfApplicationVersionRecords()
    {
        var ret_n_records = -1;

        if (!this.checkApplicationsVersion()){ return ret_n_records; }

        var application_rec_nodes = this.getXmlObject().getElementsByTagName(this.m_tags.getApplication());

        ret_n_records = application_rec_nodes.length;

        return ret_n_records;

    } // getNumberOfApplicationVersionRecords
  

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Number Application Version Records  /////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Record Node Value  ////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the application version node value for a givenapplication version record number and a tag name
    getApplicatinVersionNodeValue(i_record_tag, i_record_number)
    {
        var ret_data = '';
        
        if (!this.checkApplicationsVersion()){ return ret_data; }

        var n_records = this.getNumberOfApplicationVersionRecords();
        
        if (i_record_number < 1 || i_record_number > n_records)
        {
            alert("ApplicationsVersion.getApplicatinVersionNodeValue Record number is not between 1 and " + n_records.toString());
            return ret_data;		
        }
            
        var application_rec_nodes = this.getXmlObject().getElementsByTagName(this.m_tags.getApplication());

        var application_rec_node = application_rec_nodes[i_record_number-1];
        
        var xml_node_value = this.getNodeValueTagName(application_rec_node, i_record_tag);
        
        ret_data = this.removeFlagNodeValueNotSet(xml_node_value);
        
        return ret_data;
        
    } // getApplicatinVersionNodeValue

    // Sets the application version node value for a given application version record number and a tag name
    setApplicatinVersionNodeValue(i_record_tag, i_record_number, i_app_record_node_value)
    {	
        if (!this.checkApplicationsVersion()){ return; }

        var n_records = this.getNumberOfApplicationVersionRecords();
        
        if (i_record_number < 1 || i_record_number > n_records)
        {
            alert("ApplicationsVersion.setApplicatinVersionNodeValue Record number is not between 1 and " + n_records.toString());
            
            return;		
        }
            
        var application_rec_nodes = this.getXmlObject().getElementsByTagName(this.m_tags.getApplication());

        var application_rec_node = application_rec_nodes[i_record_number-1];
        
        var node_value = this.setFlagNodeValueIsNotSetForEmptyString(i_app_record_node_value);
        
        this.setNodeValue(application_rec_node, i_record_tag, node_value);
        
    } // setApplicatinVersionNodeValue

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

    // Returns the XML applications version file name and path
    getXmlApplicationsVersionFileName()
    {
        var ret_file_name = '';

        ret_file_name = this.m_url_relative_dir + 'ApplicationsVersion/' + 'ApplicationsVersion.xml';

        /*QQQQQQ
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
            alert("ApplicationsVersion.getXmlApplicationsVersionFileName i_n_level= " + 
            this.m_n_level_xml.toString() + " not between 0 and 3");

            return ret_file_name;
        }

        ret_file_name = level_xml_str + 'JazzGu ests.xml';
        QQQQ*/

        if (!ApplicationsVersion.execApplicationOnServer())
        {
            var level_test_str = '';

            /*QQQQ
            if (2 == this.m_n_level_xml)
            {
                level_test_str = '../';
            }
            else if (3 == this.m_n_level_xml)
            {
                level_test_str = '../../';
            }
            QQQ*/

            return level_test_str + this.m_xml_file_name_local; 
        }        

        return ret_file_name;

    } // getXmlApplicationsVersionFileName

    // Check that the applications vesrsion XML object is set
    checkApplicationsVersion()
    {      
        if (null == this.getXmlObject())
        {
            alert("ApplicationsVersion.checkApplicationsVersion Jazz applications version XML object is null");

            return false;
        }	
        else
        {
            return true;
        }
        
    } // checkApplicationsVersion

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

} // ApplicationsVersion

// Class defining the tags of the applicans versions file
class ApplicationsVersionTags 
{
    // Creates the instance of the class
    constructor() 
    {
        this.m_tag_applications_versions = "ApplicationsVersions";
        this.m_tag_application = "ApplicationVersion";
        this.m_tag_application_name = "ApplicationName";
        this.m_tag_application_url = "ApplicationUrl";
        this.m_tag_application_descr = "ApplicationDescription";

    } // constructor

    // Get member variable functions
    // =============================

    getApplication(){return this.m_tag_application;} 
    getApplicationName(){return this.m_tag_application_name;} 
    getApplicationUrl(){return this.m_tag_application_url;} 
    getApplicationDescription(){return this.m_tag_application_descr;} 

} // ApplicationsVersionTags

