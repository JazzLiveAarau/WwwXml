// File: UtilXml.js
// Date: 2024-02-05
// Author: Gunnar Lidén

// File content
// =============
//
// Class with XML utility functions
//
// 
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start UtilXml Class  ////////////////////////(///////////////////
///////////////////////////////////////////////////////////////////////////////////////////

class UtilXml
{
    // Escape chars before saving as XML value
    static escapeString(i_string)
    {
        if (UtilXml.isStringEscaped(i_string))
        {
            return i_string;
        }

        var ret_escape_str = '';

        var escape_array = UtilXml.arrayChars();

        var unescape_array = UtilXml.arrayEscapeStrings();

        var n_chars = i_string.length;

        for (var index_char=0; index_char < n_chars; index_char++)
        {
            var current_char = i_string[index_char];

            var escape_str = UtilXml.oneEscapeString(current_char);

            var escape_str_length = escape_str.length

            if (escape_str_length == 0)
            {
                ret_escape_str = ret_escape_str + current_char;
            }
            else
            {
                ret_escape_str = ret_escape_str + escape_str;
            }

        } // index_char

        return ret_escape_str;

    } // escapeString

    // Unescape codes after retrieval of XML value
    static unescapeString(i_string)
    {
        if (!UtilXml.isStringEscaped(i_string))
        {
            return i_string;
        }

        var escape_array = UtilXml.arrayChars();

        var unescape_array = UtilXml.arrayEscapeStrings();

        var ret_unescape_str = i_string;

        var n_array = UtilXml.escapeArrayLength();

        for (var index_array=0; index_array < n_array; index_array++)
        {
            var current_code = unescape_array[index_array];

            var current_char = escape_array[index_array];

            ret_unescape_str = ret_unescape_str.replaceAll(current_code, current_char);
        }

        return ret_unescape_str;

    } // unescapeString

    // Returns true if there is at least one character that have been escaped
    static isStringEscaped(i_string)
    {
        var ret_b_escaped = false;

        var unescape_array = UtilXml.arrayEscapeStrings();

        var n_array = UtilXml.escapeArrayLength();

        for (var index_array=0; index_array < n_array; index_array++)
        {
            var current_code = unescape_array[index_array];

            var index_code = i_string.indexOf(current_code);

            if (index_code >= 0)
            {
                ret_b_escaped = true;

                break;
            }
        }

        return ret_b_escaped;

    } // isStringEscaped

    // Returns the length of the arrayChars and arrayEscapeStrings 
    static escapeArrayLength()
    {
        var escape_array = UtilXml.arrayChars();

        var unescape_array = UtilXml.arrayEscapeStrings();

        var n_chars = escape_array.length;

        if (n_chars != unescape_array.length)
        {
            alert("UtilXml.getArrayLength Arrays not OK");

            return -1;
        }    

        return n_chars;

    } // escapeArrayLength

    // Returns escape code for the input char
    static oneEscapeString(i_char)
    {
        var escape_array = UtilXml.arrayChars();

        var unescape_array = UtilXml.arrayEscapeStrings();

        var n_chars = UtilXml.escapeArrayLength();

        for (var index_char=0; index_char < n_chars; index_char++)
        {
            var current_char = escape_array[index_char];

            if (i_char == current_char)
            {
                return unescape_array[index_char];
            }
            
        }

        return '';

    } // oneEscapeString


    // Returns an array that shall be escaped
    static arrayChars()
    {
        var ret_char_array = [];

        ret_char_array[0] = '<';

        ret_char_array[1] = '>';

        ret_char_array[2] = '"';

        ret_char_array[3] = "'";

        ret_char_array[4] = '&';

        return ret_char_array;

    } // arrayChars

    // Returns an array with the escape strings for arrayChars
    static arrayEscapeStrings()
    {
        var ret_escape_array = [];

        ret_escape_array[0] = '&lt;';

        ret_escape_array[1] = '&gt;';

        ret_escape_array[2] = '&quot;';

        ret_escape_array[3] = '&apos;';

        ret_escape_array[4] = '&amp;';

        return ret_escape_array;

    } // arrayEscapeStrings



} // UtilXml




///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End UtilXml Class  //////////////////////////(///////////////////
///////////////////////////////////////////////////////////////////////////////////////////
