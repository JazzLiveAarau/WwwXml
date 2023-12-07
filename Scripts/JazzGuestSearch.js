// File: JazzGuestSearch.js
// Date: 2023-12-06
// Author: Gunnar Lidén

// File content
// =============
//
// Class handling the search for jazz guest images. 

class JazzGuestSearch
{
    // Creates the instance of the class
    constructor(i_jazz_guests_obj)
    {
        // Member variables
        // ================

        // The result of the search: A list of photo data objects
        this.m_result_list = new PhotoDataList();

        // The XML object corresponding to file 
        this.m_jazz_guests_obj = i_jazz_guests_obj;

        // Search string
        this.m_search_str = "";

        // Search words array
        this.m_search_words_array = [];

        // Flag telling if only published <JazzGuestPublish> shall be searched
        this.m_only_published = true;

        // Include <JazzGuestBand> in the search
        this.m_include_band = true; 

        // Include <JazzGuestMusicians> in the search
        this.m_include_musicians = true; 

        // Include <JazzGuestNames> in the search
        this.m_include_names = true; 

        // Include <JazzGuestHeader> in the search
        this.m_include_header = false; 

        // Include <JazzGuestText> in the search
        this.m_include_text = false; 

        // Include <JazzGuestRemark> in the search
        this.m_include_remark = false; 

        // Include <JazzGuestYear> in the search
        this.m_include_year = false; 

    } // constructor

    // Set include <JazzGuestBand> in the search
    setIncludeBand(i_include_band)
    {
        this.m_include_band = i_include_band;

    } //setIncludeBand

    // Returns true if <JazzGuesBand> shall be included in the search
    includeBand()
    {
        return this.m_include_band;

    } // includeBand

    // Set include <JazzGuestMusicians> in the search
    setIncludeMusicians(i_include_musicians)
    {
        this.m_include_musicians = i_include_musicians;

    } //setIncludeMusicians

    // Returns true if <JazzGuestMusicians> shall be included in the search
    includeMusicians()
    {
        return this.m_include_musicians;

    } // includeMusicians

    // Set include <JazzGuestNames> in the search
    setIncludeNames(i_include_names)
    {
        this.m_include_names = i_include_names;

    } //setIncludeNames

    // Returns true if <JazzGuestNames> shall be included in the search
    includeNames()
    {
        return this.m_include_names;

    } // includeNames

    // Set include <JazzGuestHeader> in the search
    setIncludeHeader(i_include_header)
    {
        this.m_include_header = i_include_header;

    } // setIncludeHeader

    // Returns true if <JazzGuestHeader> shall be included in the search
    includeHeader()
    {
        return this.m_include_header;
        
    } // includeHeader

    // Set include <JazzGuestText> in the search
    setIncludeText(i_include_text)
    {
        this.m_include_text = i_include_text;

    } // setIncludeText

    // Returns true if <JazzGuestText> shall be included in the search
    includeText()
    {
        return this.m_include_text;
        
    } // includeText

    // Set include <JazzGuestRemark> in the search
    setIncludeRemark(i_include_remark)
    {
        this.m_include_remark = i_include_remark;

    } // setIncludeRemark

    // Returns true if <JazzGuestRemark> shall be included in the search
    includeRemark()
    {
        return this.m_include_remark;
        
    } // includeRemark

    // Set include <JazzGuestYear> in the search
    setIncludeYear(i_include_year)
    {
        this.m_include_year = i_include_year;

    } // setIncludeYear

    // Returns true if <JazzGuestYear> shall be included in the search
    includeYear()
    {
        return this.m_include_year;
        
    } // includeYear

    // Member functions
    // ================

     // Executes the search and returns a list of found photos (photo data objects)
     // 1. Initialization. Call of PhotoData.init
     // 2. Search. Call of executeNoInit
    execute(i_search_str)
    {
        this.m_result_list.init();

        this.executeNoInit(i_search_str);

    } // execute

    // Executes the search and returns a list of found photos (photo data objects)
    // 1. Chack the search string. Call UtilSearch.checkSearchString 
    // 2. Set the search string and the array of search words. Call of setSearchStringAndArray
    // 3. Check that XML object is created
    // 4. Loop for all concert seasons. Call of getNumberOfSeasonPrograms
    executeNoInit(i_search_str)
    {

        if (!UtilSearch.checkSearchString(i_search_str))
        {
            return this.m_result_list;
        }

        this.setSearchStringAndArray(i_search_str);

        if (null == this.m_jazz_guests_obj)
        {
            alert("JazzGuestSearch.execute Jazz Guests XML object is null");

            return this.m_result_list;
        }

        var n_guest_records = this.m_jazz_guests_obj.getNumberOfGuestRecords();

        var result_guest_numbers = [];

        var n_records_found = 0;

        for (var record_number=1; record_number <= n_guest_records; record_number++)
        {
            var b_publish =  this.m_jazz_guests_obj.getGuestPublishBool(record_number);

            if (b_publish)
            {
                if (this.includeNames())
                {
                    var guest_names = this.m_jazz_guests_obj.getGuestNames(record_number);

                    if (UtilSearch.searchCriterionFulfilled(guest_names, this.m_search_words_array))
                    {
                        result_guest_numbers[n_records_found] = record_number;
        
                        n_records_found = n_records_found + 1;
                    }

                } // includeNames

                if (this.includeMusicians())
                {
                    var musician_names = this.m_jazz_guests_obj.getGuestMusicians(record_number);

                    if (UtilSearch.searchCriterionFulfilled(musician_names, this.m_search_words_array))
                    {
                        result_guest_numbers[n_records_found] = record_number;
        
                        n_records_found = n_records_found + 1;
                    }

                } // includeMusicians

                if (this.includeBand())
                {
                    var band_name = this.m_jazz_guests_obj.getGuestBand(record_number);

                    if (UtilSearch.searchCriterionFulfilled(band_name, this.m_search_words_array))
                    {
                        result_guest_numbers[n_records_found] = record_number;
        
                        n_records_found = n_records_found + 1;
                    }

                } // includeBand

                if (this.includeHeader())
                {
                    var header_txt = this.m_jazz_guests_obj.getGuestHeader(record_number);

                    if (UtilSearch.searchCriterionFulfilled(header_txt, this.m_search_words_array))
                    {
                        result_guest_numbers[n_records_found] = record_number;
        
                        n_records_found = n_records_found + 1;
                    }

                } // includeHeader

                if (this.includeText())
                {
                    var text_txt = this.m_jazz_guests_obj.getGuestText(record_number);

                    if (UtilSearch.searchCriterionFulfilled(text_txt, this.m_search_words_array))
                    {
                        result_guest_numbers[n_records_found] = record_number;
        
                        n_records_found = n_records_found + 1;
                    }

                } // includeText

                if (this.includeRemark())
                {
                    var remark_txt = this.m_jazz_guests_obj.getGuestRemark(record_number);

                    if (UtilSearch.searchCriterionFulfilled(remark_txt, this.m_search_words_array))
                    {
                        result_guest_numbers[n_records_found] = record_number;
        
                        n_records_found = n_records_found + 1;
                    }

                } // includeRemark

                if (this.includeYear())
                {
                    var year_txt = this.m_jazz_guests_obj.getGuestYear(record_number);

                    if (UtilSearch.searchCriterionFulfilled(year_txt, this.m_search_words_array))
                    {
                        result_guest_numbers[n_records_found] = record_number;
        
                        n_records_found = n_records_found + 1;
                    }

                } // includeYear

            } // b_publish

        } // guest_record

        var n_guest_images = result_guest_numbers.length;

        for (var guest_image_index = 0; guest_image_index < n_guest_images; guest_image_index++)
        {
            var guest_number = result_guest_numbers[guest_image_index];
    
            var photo_data = UtilSearch.getPhotoDataForGuestImage(this.m_jazz_guests_obj, guest_number);		
    
            if (photo_data != null)
            {
                this.m_result_list.appendPhotoData(photo_data);
            }
    
        } // guest_image_index      
        
        return this.m_result_list;

    } // execute

     // Executes the search and returns a list of found photos (photo data objects)
     // Input data is an array of search strings e.g. an array of musician names.
    executeArray(i_search_str_array)
    {
        this.m_result_list.init();

        if (null == i_search_str_array)
        {
            alert("JazzGuestSearch.executeArray Input search string array is null");

            return null;
        }
        if (0 == i_search_str_array.length)
        {
            alert("JazzGuestSearch.executeArray Input search string array is empty");

            return null;
        }

        for (var index_str=0; index_str < i_search_str_array.length; index_str++)
        {
            var search_str = i_search_str_array[index_str];

            this.executeNoInit(search_str);
        }

        return this.m_result_list;

    } // executeArray

    // Initialize the array of photos (photo data objects) found by searching
    // (clear/empty the array)
    init()
    {
        this.m_photo_data_array = [];

    } // init    

    // Get and set functions for the member variables
    // ==============================================

    // Returns the search string
    getSearchString() { return this.m_search_str;} 

    // Sets the search string and the array of search words
    setSearchStringAndArray(i_search_str) 
    { 
        this.m_search_str = i_search_str;

        this.m_search_words_array = UtilSearch.getSearchWordArray(i_search_str);

    } // setSearchStringAndArray

} // JazzGuestSearch
