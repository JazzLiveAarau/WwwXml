// File: PrettyPrintXml.js
// Date: 2023-10-15
// Author: Gunnar Lidén

// Reference:
// https://www.w3schools.com/xml/tryit.asp?filename=try_dom_loop

// File content
// =============
//
// Class that creates a pretty print (formatted) string of an XML object
class PrettyPrintXml
{
    // Creates the instance of the class
    // i_xml_object: XML object
    constructor(i_xml_object) 
    {
        // Member variables
        // ================

        // Input XML object
        this.m_xml_object_pretty_print = i_xml_object;

        // Flag telling if the the output string is to be displayed as HTML or Windows
        this.m_pretty_print_b_html = null;

    } // constructor

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Main Functions ////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the XML object as a formatted (pretty print) HTML string
    xmlToHtmlFormattedString()
    {
        this.m_pretty_print_b_html = true;

        return this.xmlToFormattedString();

    } // xmlToHtmlFormattedString

    // Returns the XML object as a formatted (pretty print) Windows string
    xmlToWinFormattedString()
    {
        this.m_pretty_print_b_html = false;

        return this.xmlToFormattedString();

    } // xmlToWinFormattedString

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Main Functions //////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the XML object as a formatted (pretty print) string
    // Member variable m_pretty_print_b_html determines if output is HTML or Window
    xmlToFormattedString()
    {
        if (this.m_xml_object_pretty_print == null)
        {
            alert("PrettyPrintXml.xmlToFormattedString m_xml_object_pretty_print = null");

            return "";
        }

        if (this.m_pretty_print_b_html == null)
        {
            alert("PrettyPrintXml.xmlToFormattedString m_pretty_print_b_html = null");

            return "";
        }

        var ret_xml_str = '';

        ret_xml_str = ret_xml_str + this.declarationLinePrettyPrint() + this.newLinePrettyPrint();

        ret_xml_str = ret_xml_str + this.addCommentsPrettyPrint();
    
        var root_name = this.m_xml_object_pretty_print.documentElement.nodeName; // TODO Error
    
        ret_xml_str = ret_xml_str +  '<'  + root_name + '>';
    
        var nodes_level_one = this.m_xml_object_pretty_print.documentElement.childNodes;
    
        var n_tabs = 1;
        for (var index_node=0; index_node < nodes_level_one.length; index_node++)
        {
            var current_node = nodes_level_one[index_node];
    
            if (current_node.nodeType == 1)
            {
                var tag_name = current_node.nodeName;
    
                ret_xml_str = ret_xml_str + 
                    this.newLinePrettyPrint() + this.tabsLinePrettyPrint(n_tabs) + '<'  + tag_name + '>';
    
                if (current_node.childElementCount > 0)
                {
                    ret_xml_str = ret_xml_str + this.getNodePrettyPrint(current_node, n_tabs + 1);
                }        
                        
                ret_xml_str = ret_xml_str +         
                    this.newLinePrettyPrint() + this.tabsLinePrettyPrint(n_tabs) + '</' + tag_name + '>';
            }
        }
    
        ret_xml_str = ret_xml_str +  this.newLinePrettyPrint() + '</'  + root_name + '>';
    
        this.debugPrettyPrintToConsoleLog(ret_xml_str);
    

        return ret_xml_str;

    } // xmlToWinFormattedString

    // Function that wiil be called recursivly
    getNodePrettyPrint(i_node, i_n_tabs)
    {
        var ret_node_str = '';

        var child_nodes = i_node.childNodes;

        for (var index_node=0; index_node < child_nodes.length; index_node++)
        {
            var current_node = child_nodes[index_node];

            if (current_node.nodeType == 1)
            {
                var tag_name = current_node.nodeName;

                ret_node_str = ret_node_str + this.newLinePrettyPrint() + this.tabsLinePrettyPrint(i_n_tabs) + '<'  + tag_name + '>';

                if (current_node.childElementCount > 0)
                {
                    ret_node_str = ret_node_str + this.getNodePrettyPrint(current_node, i_n_tabs + 1);

                    ret_node_str = ret_node_str + this.newLinePrettyPrint() + this.tabsLinePrettyPrint(i_n_tabs) + '</'  + tag_name + '>';
                }
                else
                {
                    ret_node_str = ret_node_str + current_node.innerHTML;

                    ret_node_str = ret_node_str + '</'  + tag_name + '>';
                }    

                
            }
        }

        return ret_node_str;

    } // getNodePrettyPrint

    // Returns the first lines (nodes) of comment
    // Does not work, and is actually not requested
    // Just kept as something to look at later in order to understand
    getCommentsPrettyPrint()
    {
        var ret_xml_comments_str = '';
    
        var nodes_level_one = this.m_xml_object_pretty_print.documentElement.childNodes;
    
    
        for (var index_node=0; index_node < nodes_level_one.length; index_node++)
        {
            var current_node = nodes_level_one[index_node];
    
            if (current_node.nodeType == 8)
            {
                ret_xml_comments_str = ret_xml_comments_str + this.startCommentPrettyPrint();
    
                ret_xml_comments_str = ret_xml_comments_str + 'Retrieved comment text';
    
                ret_xml_comments_str = ret_xml_comments_str + this.endCommentPrettyPrint();
    
                ret_xml_comments_str = ret_xml_comments_str + this.newLinePrettyPrint();
            }
        }
    
    
        return ret_xml_comments_str;
    
    } // getCommentsPrettyPrint

    // Returns the start declaration line for the XML file
    declarationLinePrettyPrint()
    {
        return '<?xml version= "1.0" encoding="utf-8"?>';
    
    } // declarationLinePrettyPrint

    // Comments to add to the output XML file
    addCommentsPrettyPrint()
    {
        return '<!-- This XML file is created from an XML object by the function xmlToFormattedString -->'  + this.newLinePrettyPrint();
    
    } // addCommentsPrettyPrint    

    // Returns end of line
    newLinePrettyPrint()
    {
        if(this.m_pretty_print_b_html)
        {
            return '<br>';
        }
        else
        {
            return '\n';
        }
    
    } // newLinePrettyPrint

    // Returns tabs
    tabsLinePrettyPrint(i_n_tabs)
    {
        var ret_windows_spaces = '';
        
        for (var tab_number=1; tab_number <= i_n_tabs; tab_number++)
        {
            if(this.m_pretty_print_b_html)
            {
                ret_windows_spaces = ret_windows_spaces + '&nbsp;&nbsp;&nbsp;&nbsp;';
            }
            else
            {
                ret_windows_spaces = ret_windows_spaces + '    ';
            }
        }
    
        return ret_windows_spaces;
    
    } // tabsLinePrettyPrint

    // Returns start of a comment
    startCommentPrettyPrint()
    {
        return '<!--  ';
    
    } // startCommentPrettyPrint

    // Returns end of a comment
    endCommentPrettyPrint()
    {
        return ' -->';
        
    } // endCommentPrettyPrint

    // Displays the input string in the debugger Console
    debugPrettyPrintToConsoleLog(i_xml_str)
    {
        console.log(i_xml_str);
    
    } // debugPrettyPrintToConsoleLog    

    // Convert XML object to string
    xmlToString(i_xml_object)
    {
        // https://www.dotnettricks.com/learn/javascript/convert-string-to-xml-and-xml-to-string-using-javascript
        
        //code for IE
        if (window.ActiveXObject) 
        {
           var out_xml_str = i_xml_object.xml; return out_xml_str;
        } 
        // code for Chrome, Safari, Firefox, Opera, etc.
        else 
        {
           return (new XMLSerializer()).serializeToString(i_xml_object);
        }
        
     } // xmlToString    

} // PrettyPrintXml