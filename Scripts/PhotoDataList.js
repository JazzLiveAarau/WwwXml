// File: PhotoDataList.js
// Date: 2022-12-06
// Author: Gunnar Lidén

// File content
// =============
//
// Functions handling the search for photos
//

//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Photo List Class  ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// Class holding a list of PhotoData objects
class PhotoDataList
{
    // Creates the instance of the class
    constructor()
    {
        // Member variables
        // ================

        // Array of photos (photo data objects) found by searching
        this.m_photo_data_array = [];

    } // constructor

    // Member functions
    // ================

    // Get the list
    getList()
    {
        return this.m_photo_data_array;
    
    } // getList
    
    // Appends a photo (a photo data object) found by searching
    // Photo will not be appended if already in the array or if not allowed to publish
    appendPhotoData(i_photo_data)
    {
        if (this.alreadyInPhotoDataArray(i_photo_data))
        {
            return;
        }

        if (!this.photoDataIsAllowedToBePublished(i_photo_data))
        {
            return;
        }

        this.m_photo_data_array[this.getNumberOfPhotos()] = i_photo_data;

    } // appendPhotoData

    // Appends a photo (a photo data object) for a photo show
    // The same image is allowed and a check if it can be published is
    // not applicable
    appendPhotoDataForPhotoShow(i_photo_data)
    {
        this.m_photo_data_array[this.getNumberOfPhotos()] = i_photo_data;

    } // appendPhotoDataForPhotoShow

    // Returns true if photo is allowed to be published.
    // For the homepage test version all photos will be displayed TODO
    photoDataIsAllowedToBePublished(i_photo_data)
    {
        //TODO if (getFlagOnlyAudienceRandomPhotosAfterLogin()) 
        //TODO {
        //TODO    return true;
        //TODO }

        if (i_photo_data.getPublish())
        {
            return true;
        }
        else
        {
            return false;
        }

    } // photoDataIsAllowedToBePublished
    
    // Returns true if the image already is in the array
    // In the beginning, there were not one gallery for one concert.
    // The XML photo files are changed for this case. Problably because
    // there was a need to get a gallery for each concert...  
    alreadyInPhotoDataArray(i_photo_data)
    {
        var ret_exists = false;

        var input_photo_url = i_photo_data.getUrl();

        for (var index_photo=0; index_photo < this.m_photo_data_array.length; index_photo++)
        {
            var current_photo_url = this.m_photo_data_array[index_photo].getUrl();

            if (current_photo_url == input_photo_url)
            {
                ret_exists = true;

                break;
            }

        } // index_photo
        
        return ret_exists;

    } // alreadyInPhotoDataArray

    // Returns the number of photos (photo data objects) found by searching
    getNumberOfPhotos()
    {
        return this.m_photo_data_array.length;

    } // getNumberOfPhotos

    // Returns the photo data object for a given photo number
    getPhotoData(i_photo_number)
    {
        if (i_photo_number <= 0 || i_photo_number > this.m_photo_data_array.length)
        {
            alert("PhotoDataList.getPhotoData Photo number " + i_photo_number.toString() + ' is not between 1 and ' + this.m_photo_data_array.length.toString());
            
            return null;
        }

        return this.m_photo_data_array[i_photo_number - 1];

    } // getPhotoData

    // Returns true if photos were found, i.e. there are photos to display
    photosFound()
    {
        if (this.m_photo_data_array.length > 0)
        {
            return true;
        }
        else
        {
            return false;
        }

    } // photosFound    

    // Initialize the array of photos (photo data objects) found by searching
    // (clear/empty the array)
    init()
    {
        this.m_photo_data_array = [];

    } // init    

} // PhotoDataList

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Photo List Class  ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Photo Class  //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class holding all data for a photo
class PhotoData 
{
    // Creates the instance of the class
    constructor(i_url_photo) 
    {
        // Member variables
        // ================

        // URL (server address) for the photo
        this.m_url = i_url_photo;

        // URL (server address) for the small photo
        this.m_url_small = "";

        // URL (server address) for the big (original) photo
        this.m_url_big = "";        

        // Photo text
        this.m_text = "";

        // ZIP file name for the photo
        this.m_zip = "";

        // Photographer
        this.m_photographer = "";

       // Day
       this.m_day = "";

       // Month
       this.m_month = "";

       // Year
       this.m_year = ""; 

       // Band name
       this.m_band = "";        

       // Publish flag
       this.m_publish = true;

       // Gallery name (number)
       this.m_gallery_name = "";

       // Text row one for audience photo
       this.m_audience_row_one = "";

       // Text row two for audience photo
       this.m_audience_row_two = "";

       // Names for audience photo
       this.m_audience_names = "";
                     
       // Remark for audience photo
       this.m_audience_remark = "";

       // Text row one for photo show photo
       this.m_photoshow_row_one = "";

       // Text row two for photo show photo
       this.m_photoshow_row_two = "";

       // Text row three for photo show photo
       this.m_photoshow_row_three = "";
                                  
       // Name of the active photo XML object
       // Values: Galleries, GalleryOne, GalleryTwo and AudiencePhotos
       this.m_active_photo_xml_name = 'Undefined';

    } // constructor

    // Get and set functions for the member variables
    // ==============================================

    // Returns the URL (server address) for the photo
    getUrl() { return this.m_url;} 

    // Sets the URL (server address) for the photo
    setUrl(i_url_photo) { this.m_url = i_url;} 

    // Returns the URL (server address) for the small photo
    getUrlSmall() { return this.m_url_small;} 

    // Sets the URL (server address) for the small photo
    setUrlSmall(i_url_small) { this.m_url_small = i_url_small;}

    // Returns the URL (server address) for the big photo
    getUrlBig() { return this.m_url_big;} 

    // Sets the URL (server address) for the big photo
    setUrlBig(i_url_big) { this.m_url_big = i_url_big;}    
    
    // Returns the photo text
    getText() { return this.m_text;} 

    // Sets the photo text
    setText(i_text) { this.m_text = i_text;}     

    // Returns the ZIP file name for the photo
    getZip() { return this.m_zip;} 

    // Sets the ZIP file name for the photo
    setZip(i_zip) { this.m_zip = i_zip;}     

    // Returns the photographer
    getPhotographer() { return this.m_photographer;} 

    // Sets the photographer
    setPhotographer(i_photographer) { this.m_photographer = i_photographer;}

    // Returns the day
    getDay() { return this.m_day;} 

    // Sets the day
    setDay(i_day) { this.m_day = i_day;}

    // Returns the month
    getMonth() { return this.m_month;} 

    // Sets the month
    setMonth(i_month) { this.m_month = i_month;}

    // Returns the year
    getYear() { return this.m_year;} 

    // Sets the year
    setYear(i_year) { this.m_year = i_year;}

    // Returns the band name
    // Band names may be incorrect for Gallery one photos older than from 
    // Please see addBandOnlyIfInfoCorrect
    getBand() 
    { 
        return this.m_band;
        
        /*QQQQ Pseudo galleries added 20220309
        if (this.photoBandInfoIsCorrect())
        {
            return this.m_band;
        }
        else
        {
            return '';
        }
        Pseudo galleries added 20220309 QQQ*/
    } 

    // Sets the band name
    setBand(i_band) { this.m_band = i_band;}       

    // Returns the gallery name (number)
    getGalleryName() { return this.m_gallery_name;} 

    // Sets the URL gallery name (number)
    setGalleryName(i_gallery_name) { this.m_gallery_name = i_gallery_name;}    

    // Returns the text row one for audience photo
    getAudienceRowOne() { return this.m_audience_row_one;} 

    // Sets the row one for audience photo
    setAudienceRowOne(i_audience_row_one) { this.m_audience_row_one = i_audience_row_one;} 
	
    // Returns the text row two for audience photo
    getAudienceRowTwo() { return this.m_audience_row_two;} 
	
    // Sets the row two for audience photo
    setAudienceRowTwo(i_audience_row_two) { this.m_audience_row_two = i_audience_row_two;} 
	
    // Returns the names for audience photo
    getAudienceNames() { return this.m_audience_names;} 
	
    // Sets the names for audience photo
    setAudienceNames(i_audience_names) { this.m_audience_names = i_audience_names;} 
		
    // Returns the remark for audience photo
    getAudienceRemark() { return this.m_audience_remark;} 
	
    // Sets the remark for audience photo
    setAudienceRemark(i_audience_remark) { this.m_audience_remark = i_audience_remark;} 

    // Returns the text row one for photo show photo
    getPhotoShowRowOne() { return this.m_photoshow_row_one;} 

    // Sets the row one for audience photo
    setPhotoShowRowOne(i_photoshow_row_one) { this.m_photoshow_row_one = i_photoshow_row_one;} 

    // Returns the text row two for photo show photo
    getPhotoShowRowTwo() { return this.m_photoshow_row_two;} 

    // Sets the row two for audience photo
    setPhotoShowRowTwo(i_photoshow_row_two) { this.m_photoshow_row_two = i_photoshow_row_two;} 
	
    // Returns the text row three for photo show photo
    getPhotoShowRowThree() { return this.m_photoshow_row_three;} 

    // Sets the row three for audience photo
    setPhotoShowRowThree(i_photoshow_row_three) { this.m_photoshow_row_three = i_photoshow_row_three;} 
		    
    // Returns active photo XML name
    getActivePhotoXmlName() { return this.m_active_photo_xml_name;} 

    // Sets the active photo XML name
    setActivePhotoXmlName(i_active_photo_xml_name) { this.m_active_photo_xml_name = i_active_photo_xml_name;}   
    
    // Returns the publish flag
    getPublish() { return this.m_publish;} 

    // Sets the publish flag
    setPublish(i_publish) { this.m_publish = i_publish;}    

    // Returns true if the band information (name) is correct.
    // Prior to 2008 there were Peter Günthard galleries with
    // photos from multiple concerts. The function that gets
    // the band names has difficulties linking a photo to the
    // right concert
    // Pseudo galleries were added 20220309. Function no longer needed
    photoBandInfoIsCorrect()
    {
        var photographer_name = this.getPhotographer();

        if (photographer_name != 'Peter Günthart')
        {
            return true;
        }

        var photo_year = this.getYear();

        if (photo_year >= 2008)
        {
            return true;
        }
        else
        {
            return false;
        }
      
    } // photoBandInfoIsCorrect

    // Returns true if it is an audience photo
    audiencePhoto()
    {
        if ('AudiencePhotos' == this.m_active_photo_xml_name)
        {
            return true;
        }
        else
        {
            return false;
        }

    } // audiencePhoto

    // Returns true if it is a gallery photo
    galleryPhoto()
    {
        if ('GalleryOne' == this.m_active_photo_xml_name || 
            'GalleryTwo' == this.m_active_photo_xml_name ||
            'Galleries'  == this.m_active_photo_xml_name)
        {
            return true;
        }
        else
        {
            return false;
        }

    } // galleryPhoto

    // Returns true if it is an audience photo
    imageListPhoto()
    {
        if ('ImageList' == this.m_active_photo_xml_name)
        {
            return true;
        }
        else
        {
            return false;
        }

    } // imageListPhoto

    // Check functions for the member variables
    // ========================================

} // PhotoData

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Photo Class  ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
