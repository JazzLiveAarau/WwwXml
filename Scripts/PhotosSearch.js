// File: PhotosSearch.js
// Date: 2022-12-07
// Author: Gunnar Lidén

// File content
// =============
//
// Functions handling the search for photos
//
// Reference: https://www.w3schools.com/js/js_classes.asp

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Photo Search Class  ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class handling the search for jazz photos
class PhotosSearch
{
    // Creates the instance of the class
    constructor(i_galerie_one_xml, i_galerie_two_xml)
    {
        // Member variables
        // ================

        // Galerie one XML object
        this.m_galerie_one_xml = i_galerie_one_xml;

        // Galerie two XML object
        this.m_galerie_two_xml = i_galerie_two_xml;

        // The result of the search: A list of photo data objects
        this.m_result_list = new PhotoDataList();

        // Search string
        this.m_search_str = "";

        // Search words array
        this.m_search_words_array = [];

    } // constructor

    // Member functions
    // ================
    
    // Executes the search and returns a list of found photos (photo data objects)
    // 1. Chack the search string. Call UtilSearch.checkSearchString 
    // 2. Set the search string and the array of search words. Call of setSearchStringAndArray
    // 3. Loop for all concert seasons. Call of getNumberOfSeasonPrograms
    // 3.1 Get the season program XML object and set as active XML season program
    //     Call of getSeasonProgramXmlObject and setActiveSeasonProgramXmlObject
    // 3.2 Get the season start year. Call of getYearAutumn
    // 3.3 Loop for all season concerts. Call of getNumberOfConcerts
    // 3.3.1 Loop for all (two) XML gallery files.
    //
    // x. Set active season XML object to current season. 
    //    Call of setActiveSeasonProgramXmlToCurrentSeason
    execute(i_search_str)
    {
        this.m_result_list.init();

        if (!UtilSearch.checkSearchString(i_search_str))
        {
            return this.m_result_list;
        }    

        setActivePhotoXmlToGalleries();

        this.setSearchStringAndArray(i_search_str);

        var b_current_season = true;

        var n_seasons = getNumberOfSeasonPrograms(b_current_season);

        //n_seasons = n_seasons - 6;  // For test
    
        var loop_end = 0;
    
        //loop_end = n_seasons - 4;   // For test

        for (var index_season=n_seasons-1; index_season >= loop_end; index_season--)
        {
            var current_season_program_xml_object = getSeasonProgramXmlObject(index_season);
    
            setActiveSeasonProgramXmlObject(current_season_program_xml_object);

            var season_start_year = getYearAutumn();
    
            var n_concerts = getNumberOfConcerts();
            
            for (var concert_number=n_concerts; concert_number >= 1; concert_number--)
            {
                for (var file_number=1; file_number <= 2; file_number++)
                {
                    var active_xml_photo_object = null;
                    if (1 == file_number)
                    {
                        active_xml_photo_object = this.m_galerie_one_xml;
                    }
                    else if (2 == file_number)
                    {
                        active_xml_photo_object = this.m_galerie_two_xml;
                    }

                    if(!this.searchOneConcert(active_xml_photo_object, season_start_year, concert_number))
                    {
                        return this.m_result_list;
                    }

                } // file_number

            } // concert_number

        } // index_season

        setActiveSeasonProgramXmlToCurrentSeason();

        return this.m_result_list;

    } // execute

    // Search after photos in one concert. Found photos are added to m_result_list
    // 1. Set the active photo gallerie XML object active_xml_photo_object
    //    Call of setActivePhotoGallerieXmlObject
    searchOneConcert(i_active_xml_photo_object, i_season_start_year, i_concert_number)
    {
        var ret_bool = true;

        if (!setActivePhotoGallerieXmlObject(i_active_xml_photo_object))
        {
            ret_bool = false;

            return ret_bool;
        }

        var photo_season_number = this.getPhotoSeasonNumber(i_season_start_year);
        if (photo_season_number <= 0)
        {
            // No objects added. Not an error
            return ret_bool;
        }

        var photo_concert_number = this.getPhotoConcertNumber(photo_season_number, i_concert_number);
        if (photo_concert_number <= 0)
        {
            // No objects added. Not an error
            return ret_bool;
        }

        var photo_numbers = this.getPhotoNumbers(photo_season_number, photo_concert_number);
        if (photo_numbers.length == 0)
        {
            // No objects added. Not an error
            return ret_bool;
        }

        if (!this.appendPhotos(i_active_xml_photo_object, photo_season_number, photo_concert_number, photo_numbers))
        {
            ret_bool = false;

            return ret_bool;
        }

        return ret_bool;

    } // searchOneConcert

    // Append photos (photo data objects) to m_result_list
    appendPhotos(i_active_xml_photo_object, i_photo_season_number, i_photo_concert_number, i_photo_numbers)
    {
        var ret_bool = true;

        if (!setActivePhotoGallerieXmlObject(i_active_xml_photo_object))
        {
            ret_bool = false;

            return ret_bool;
        }

        var band_name =  getSeasonPhotoBandName(i_photo_season_number, i_photo_concert_number);

        var concert_year = getSeasonPhotoConcertYear(i_photo_season_number, i_photo_concert_number);

        var concert_month = getSeasonPhotoConcertMonth(i_photo_season_number, i_photo_concert_number);

        var concert_day = getSeasonPhotoConcertDay(i_photo_season_number, i_photo_concert_number);

        var gallery_name = getSeasonPhotoGalleryName(i_photo_season_number, i_photo_concert_number);

        var photographer_name = getSeasonPhotographerName(i_photo_season_number, i_photo_concert_number);

        var zip_file_name = getSeasonPhotoZipName(i_photo_season_number, i_photo_concert_number);

        var photo_texts = this.getPhotoTextsArray(i_photo_season_number, i_photo_concert_number);

        for (var photo_number=1; photo_number <= i_photo_numbers.length; photo_number++)
        {
            var image_number = i_photo_numbers[photo_number-1];

            var url_photo = getGalleryPhotoUrl(gallery_name, concert_year, concert_month, concert_day, image_number);

            var photo_data = new PhotoData(url_photo);

            var photo_text = photo_texts[image_number - 1];

            photo_data.setText(photo_text);

            var url_photo_small = getGalleryPhotoUrlSmall(gallery_name, concert_year, concert_month, concert_day, image_number);

            photo_data.setUrlSmall(url_photo_small);

            photo_data.setBand(band_name);

            photo_data.setYear(concert_year);

            photo_data.setMonth(concert_month);

            photo_data.setDay(concert_day);

            photo_data.setPhotographer(photographer_name);

            photo_data.setZip(zip_file_name);

            photo_data.setGalleryName(gallery_name);

            photo_data.setActivePhotoXmlName(getActivePhotoXmlName());
            
            this.m_result_list.appendPhotoData(photo_data);

        }

        return ret_bool;

    } // appendPhotos

    // Returns the photo season number for the input start year
    // Returns -1 if photo season not exists
    getPhotoSeasonNumber(i_season_start_year)
    {
        var ret_number = -1;

        var n_photo_seasons = getNumberOfPhotoSeasons();
        if (n_photo_seasons <= 0)
        {
            return ret_number;
        }

        for (var photo_season_number=1; photo_season_number <= n_photo_seasons; photo_season_number++)
        {
            var start_year = getPhotoStartYearSeason(photo_season_number);

            if (i_season_start_year == start_year)
            {
                ret_number = photo_season_number;

                break;
            }

        } // photo_season_number

        return ret_number;

    } // getPhotoSeasonNumber

    // Returns the photo concert number for the input photo season number and concert number
    // Returns -1 if photo concer not exists
    getPhotoConcertNumber(i_photo_season_number, i_concert_number)
    {
        var ret_number = -1;

        var n_photo_concerts = getNumberOfSeasonPhotoConcerts(i_photo_season_number);
        if (n_photo_concerts <= 0)
        {
            return ret_number;
        }

        for (var photo_concert_number=1; photo_concert_number <= n_photo_concerts; photo_concert_number++)
        {
            var concert_number = getSeasonPhotoConcertNumber(i_photo_season_number, photo_concert_number);

            if (i_concert_number == concert_number)
            {
                ret_number = photo_concert_number;

                break;
            }

        } // photo_concert_number

        return ret_number;
  
    } // getPhotoConcertNumber

    // Returns the photo texts in an array
    getPhotoTextsArray(i_photo_season_number, i_photo_concert_number)
    {
        var ret_photo_texts = [];

        ret_photo_texts[0] = getSeasonPhotoTextOne(i_photo_season_number, i_photo_concert_number);
        ret_photo_texts[1] = getSeasonPhotoTextTwo(i_photo_season_number, i_photo_concert_number);
        ret_photo_texts[2] = getSeasonPhotoTextThree(i_photo_season_number, i_photo_concert_number);
        ret_photo_texts[3] = getSeasonPhotoTextFour(i_photo_season_number, i_photo_concert_number);
        ret_photo_texts[4] = getSeasonPhotoTextFive(i_photo_season_number, i_photo_concert_number);
        ret_photo_texts[5] = getSeasonPhotoTextSix(i_photo_season_number, i_photo_concert_number);
        ret_photo_texts[6] = getSeasonPhotoTextSeven(i_photo_season_number, i_photo_concert_number);
        ret_photo_texts[7] = getSeasonPhotoTextEight(i_photo_season_number, i_photo_concert_number);
        ret_photo_texts[8] = getSeasonPhotoTextNine(i_photo_season_number, i_photo_concert_number);

        return ret_photo_texts;

    } // getPhotoTextsArray

    // Returns an array with numbers defining the photos that includes the search word array 
    getPhotoNumbers(i_photo_season_number, i_photo_concert_number)
    {
        var ret_photo_numbers = [];

        var photo_texts = this.getPhotoTextsArray(i_photo_season_number, i_photo_concert_number);

        var n_photos_found = 0;

        for (var photo_number=1; photo_number <= 9; photo_number++)
        {
            var photo_text =  photo_texts[photo_number - 1];

            if (UtilSearch.searchCriterionFulfilled(photo_text, this.m_search_words_array))
            {
                ret_photo_numbers[n_photos_found] = photo_number;

                n_photos_found = n_photos_found + 1;
            }

        } // photo_number

        return ret_photo_numbers;

    } // getPhotoNumbers

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


} // PhotosSearch

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Photo Search Class  /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

