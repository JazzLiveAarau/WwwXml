// File: JazzGuestRecord.js
// Date: 2024-02-07
// Author: Gunnar Lidén

// File content
// =============
//
// Record (class) corresponding to one <JazzGuest> in JazzGuests.xml and JazzGuestsUploaded.xml
//

class JazzGuest
{
    constructor()
    {
        // Member variables (fields)
        // =========================

        // <JazzGuestHeader>
        this.m_header = '';

        // <JazzGuestText>
        this.m_text = '';

        // <JazzGuestNames>
        this.m_names = '';

        // <JazzGuestFileName>
        this.m_file_name = '';

        // <JazzGuestFileType>
        this.m_file_type = '';

        // <JazzGuestStatus>
        this.m_status = '';

        // <JazzGuestBand>
        this.m_band = '';

        // <JazzGuestMusicians>
        this.m_musicians = '';

        // <JazzGuestYear>
        this.m_year = '';

        // <JazzGuestMonth>
        this.m_month = '';

        // <JazzGuestDay>
        this.m_day = '';

        // <JazzGuestRemark>
        this.m_remark = '';

        // <JazzGuestAvatar>
        this.m_avatar = '';

        // <JazzGuestEmail>
        this.m_email = '';

        // <JazzGuestTelephone>
        this.m_telephone = '';

        // <JazzGuestPublish>
        this.m_publish = '';

        // <JazzGuestRegNumber>
        this.m_reg_number = '';

    } // constructor

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Get Guest Data ////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Get <JazzGuestHeader>
    getHeader()
    {
        return this.m_header;

    } // getHeader

    // Get <JazzGuestText>
    getText()
    {
        return this.m_text;

    } // getText

    // Get <JazzGuestNames>
    getNames()
    {
        return this.m_names;

    } // getNames

    // Get <JazzGuestFileName>
    getFileName()
    {
        return this.m_file_name;

    } // getFileName

    // Get <JazzGuestFileType>
    getFileType()
    {
        return this.m_file_type;

    } // getFileType

    // Get <JazzGuestStatus>
    getStatus()
    {
        return this.m_status;

    } // getStatus

    // Get <JazzGuestBand>
    getBand()
    {
        return this.m_band;

    } // getBand

    // Get <JazzGuestMusicians>
    getMusicians()
    {
        return this.m_musicians;

    } // getMusicians

    // Get <JazzGuestYear>
    getYear()
    {
        return this.m_year;

    } // getYear

    // Get <JazzGuestMonth>
    getMonth()
    {
        return this.m_month;

    } // getMonth

    // Get <JazzGuestDay>
    getDay()
    {
        return this.m_day;

    } // getDay

    // Get <JazzGuestRemark>
    getRemark()
    {
        return this.m_remark;

    } // getRemark

    // Get <JazzGuestAvatar>
    getAvatar()
    {
        return this.m_avatar;

    } // getAvatar

    // Get <JazzGuestEmail>
    getEmail()
    {
        return this.m_email;

    } // getEmail

    // Get <JazzGuestTelephone>
    getTelephone()
    {
        return this.m_telephone;

    } // getTelephone

    // Get <JazzGuestPublish> as string
    getPublish()
    {
        return this.m_publish;

    } // getPublish

    // Get <JazzGuestPublish> as boolean
    getPublishBool()
    {
        if (this.getPublish() == 'TRUE')
        {
            return true;
        }
        else
        {
            return false;
        }

    } // getPublishBool

    // Get <JazzGuestRegNumber>
    getRegNumber()
    {
        return this.m_reg_number;

    } // getRegNumber

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Get Guest Data //////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Set Guest Data ////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Set <JazzGuestHeader>
    setHeader(i_header)
    {
        this.m_header = i_header;

    } // setHeader

    // Set <JazzGuestText>
    setText(i_text)
    {
        this.m_text = i_text;

    } // setText

    // Set <JazzGuestNames>
    setNames(i_names)
    {
        this.m_names = i_names;

    } // setNames

    // Set <JazzGuestFileName>
    setFileName(i_file_name)
    {
        this.m_file_name = i_file_name;

    } // setFileName

    // Set <JazzGuestFileType>
    setFileType(i_file_type)
    {
        this.m_file_type = i_file_type;

    } // setFileType

    // Set <JazzGuestStatus>
    setStatus(i_status)
    {
        this.m_status = i_status;

    } // setStatus

    // Set <JazzGuestBand>
    setBand(i_band)
    {
        this.m_band = i_band;

    } // setBand

    // Set <JazzGuestMusicians>
    setMusicians(i_musicians)
    {
        this.m_musicians = i_musicians;

    } // setMusicians

    // Set <JazzGuestYear>
    setYear(i_year)
    {
        this.m_year = i_year;

    } // setYear

    // Set <JazzGuestMonth>
    setMonth(i_month)
    {
        this.m_month = i_month;

    } // setMonth

    // Set <JazzGuestDay>
    setDay(i_day)
    {
        this.m_day = i_day;

    } // setDay

    // Set <JazzGuestRemark>
    setRemark(i_remark)
    {
        this.m_remark = i_remark;

    } // setRemark

    // Set <JazzGuestAvatar>
    setAvatar(i_avatar)
    {
        this.m_avatar = i_avatar;

    } // setAvatar

    // Set <JazzGuestEmail>
    setEmail(i_email)
    {
        this.m_email = i_email;

    } // setEmail

    // Set <JazzGuestTelephone>
    setTelephone(i_telephone)
    {
        this.m_telephone = i_telephone;

    } // setTelephone

    // Set <JazzGuestPublish> as string
    setPublish(i_publish)
    {
        this.m_publish = i_publish;

    } // setPublish

    // Set <JazzGuestPublish> as boolean
    setPublishBool(i_publish)
    {
        if (i_publish)
        {
            this.m_publish = 'TRUE';
        }
        else
        {
            this.m_publish = 'FALSE';
        }

    } // setPublishBool

    // Set <JazzGuestRegNumber>
    setRegNumber(i_reg_number)
    {
        this.m_reg_number = i_reg_number;

    } // setRegNumber

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Set Guest Data //////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Utility Functions /////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Set jazz guest record with data from a guest XML object
    // i_guest_xml_object: XML object corresponding to JazzGuests.xml or JazzGuestsUploaded.xml
    // i_record_number:    Guest record number
    setJazzGuestRecord(i_guest_xml_object, i_record_number)
    {
        var unescape_str = '';

        unescape_str = UtilXml.unescapeString(i_guest_xml_object.getGuestHeader(i_record_number));

        this.setHeader(unescape_str);

        unescape_str = UtilXml.unescapeString(i_guest_xml_object.getGuestText(i_record_number));

        this.setText(unescape_str);

        unescape_str = UtilXml.unescapeString(i_guest_xml_object.getGuestNames(i_record_number));

        this.setNames(unescape_str);

        this.setFileName(i_guest_xml_object.getGuestFileName(i_record_number));

        this.setFileType(i_guest_xml_object.getGuestFileType(i_record_number));

        this.setStatus(i_guest_xml_object.getGuestStatus(i_record_number));

        this.setBand(i_guest_xml_object.getGuestBand(i_record_number));

        this.setMusicians(i_guest_xml_object.getGuestMusicians(i_record_number));

        this.setYear(i_guest_xml_object.getGuestYear(i_record_number));

        this.setMonth(i_guest_xml_object.getGuestMonth(i_record_number));

        this.setDay(i_guest_xml_object.getGuestDay(i_record_number));

        unescape_str = UtilXml.unescapeString(i_guest_xml_object.getGuestRemark(i_record_number));

        this.setRemark(unescape_str);

        this.setAvatar(i_guest_xml_object.getGuestAvatar(i_record_number));

        this.setEmail(i_guest_xml_object.getGuestEmail(i_record_number));

        this.setTelephone(i_guest_xml_object.getGuestTelephone(i_record_number));

        this.setPublish(i_guest_xml_object.getGuestPublish(i_record_number));

        this.setRegNumber(i_guest_xml_object.getGuestRegNumber(i_record_number));

    } // setJazzGuestRecord

    // Set XML object jazz guest record data
    // i_guest_xml_object: XML object corresponding to JazzGuests.xml or JazzGuestsUploaded.xml
    // i_record_number:    Guest record number
    setXmlJazzGuestRecord(i_guest_xml_object, i_record_number)
    {
        var escape_str = '';

        escape_str = UtilXml.escapeString(this.getHeader());

        i_guest_xml_object.setGuestHeader(i_record_number, escape_str);

        escape_str = UtilXml.escapeString(this.getText());

        i_guest_xml_object.setGuestText(i_record_number, escape_str);

        escape_str = UtilXml.escapeString(this.getNames());

        i_guest_xml_object.setGuestNames(i_record_number, escape_str);

        i_guest_xml_object.setGuestFileName(i_record_number, this.getFileName());

        i_guest_xml_object.setGuestFileType(i_record_number, this.getFileType());

        i_guest_xml_object.setGuestStatus(i_record_number, this.getStatus());

        i_guest_xml_object.setGuestBand(i_record_number, this.getBand());

        i_guest_xml_object.setGuestMusicians(i_record_number, this.getMusicians());

        i_guest_xml_object.setGuestYear(i_record_number, this.getYear());

        i_guest_xml_object.setGuestMonth(i_record_number, this.getMonth());

        i_guest_xml_object.setGuestDay(i_record_number, this.getDay());

        escape_str = UtilXml.escapeString(this.getRemark());

        i_guest_xml_object.setGuestRemark(i_record_number, escape_str);

        i_guest_xml_object.setGuestAvatar(i_record_number, this.getAvatar());

        i_guest_xml_object.setGuestEmail(i_record_number, this.getEmail());

        i_guest_xml_object.setGuestTelephone(i_record_number, this.getTelephone());

        i_guest_xml_object.setGuestPublish(i_record_number, this.getPublish());

        i_guest_xml_object.setGuestRegNumber(i_record_number, this.getRegNumber());

    } // setXmlJazzGuestRecord

    // Append the jazz guest record to the guest XML object
    // i_guest_xml_object: XML object corresponding to JazzGuests.xml or JazzGuestsUploaded.xml
    appendXmlJazzGuestRecord(i_guest_xml_object)
    {    
        i_guest_xml_object.appendGuestNode();

        var n_records = i_guest_xml_object.getNumberOfGuestRecords();

        this.setXmlJazzGuestRecord(i_guest_xml_object, n_records);

    } // appendXmlJazzGuestRecord

    // Returns true if records are equal
    static recordsAreEqual(i_rec_one, i_rec_two)
    {
        var ret_equal = true;

        if (i_rec_one.m_header != i_rec_two.m_header)
        {
            ret_equal = false;

            console.log("JazzGuestRecord.recordsAreEqual <JazzGuestHeader> not equal");
        }

        if (i_rec_one.m_text != i_rec_two.m_text)
        {
            ret_equal = false;

            console.log("JazzGuestRecord.recordsAreEqual <JazzGuestText> not equal");
        }

        if (i_rec_one.m_names != i_rec_two.m_names)
        {
            ret_equal = false;

            console.log("JazzGuestRecord.recordsAreEqual <JazzGuestNames> not equal");
        }

        if (i_rec_one.m_file_name != i_rec_two.m_file_name)
        {
            ret_equal = false;

            console.log("JazzGuestRecord.recordsAreEqual <JazzGuestFileName> not equal");
        }   

        if (i_rec_one.m_file_type != i_rec_two.m_file_type)
        {
            ret_equal = false;

            console.log("JazzGuestRecord.recordsAreEqual <JazzGuestFileType> not equal");
        }   

        if (i_rec_one.m_status != i_rec_two.m_status)
        {
            ret_equal = false;

            console.log("JazzGuestRecord.recordsAreEqual <JazzGuestStatus> not equal");
        }   

        if (i_rec_one.m_band != i_rec_two.m_band)
        {
            ret_equal = false;

            console.log("JazzGuestRecord.recordsAreEqual <JazzGuestBand> not equal");
        }   

        if (i_rec_one.m_musicians != i_rec_two.m_musicians)
        {
            ret_equal = false;

            console.log("JazzGuestRecord.recordsAreEqual <JazzGuestMusicians> not equal");
        }   

        if (i_rec_one.m_year != i_rec_two.m_year)
        {
            ret_equal = false;

            console.log("JazzGuestRecord.recordsAreEqual <JazzGuestYear> not equal");
        }   

        if (i_rec_one.m_month != i_rec_two.m_month)
        {
            ret_equal = false;

            console.log("JazzGuestRecord.recordsAreEqual <JazzGuestMonth> not equal");
        }   

        if (i_rec_one.m_day != i_rec_two.m_day)
        {
            ret_equal = false;

            console.log("JazzGuestRecord.recordsAreEqual <JazzGuestDay> not equal");
        }   

        if (i_rec_one.m_remark != i_rec_two.m_remark)
        {
            ret_equal = false;

            console.log("JazzGuestRecord.recordsAreEqual <JazzGuestRemark> not equal");
        }   

        if (i_rec_one.m_avatar != i_rec_two.m_avatar)
        {
            ret_equal = false;

            console.log("JazzGuestRecord.recordsAreEqual <JazzGuestAvatar> not equal");
        }   

        if (i_rec_one.m_email != i_rec_two.m_email)
        {
            ret_equal = false;

            console.log("JazzGuestRecord.recordsAreEqual <JazzGuestEmail> not equal");
        }   

        if (i_rec_one.m_telephone != i_rec_two.m_telephone)
        {
            ret_equal = false;

            console.log("JazzGuestRecord.recordsAreEqual <JazzGuestTelephone> not equal");
        }   

        if (i_rec_one.m_publish != i_rec_two.m_publish)
        {
            ret_equal = false;

            console.log("JazzGuestRecord.recordsAreEqual <JazzGuestPublish> not equal");
        } 

        if (i_rec_one.m_reg_number != i_rec_two.m_reg_number)
        {
            ret_equal = false;

            console.log("JazzGuestRecord.recordsAreEqual <JazzGuestRegNumber> not equal");
        } 

        return ret_equal;

    } // recordsAreEqual


    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Utility Functions ///////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    

} // JazzGuest