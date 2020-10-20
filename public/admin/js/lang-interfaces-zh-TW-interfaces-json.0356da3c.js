(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lang-interfaces-zh-TW-interfaces-json"],{5727:function(e){e.exports=JSON.parse('{"interfaces":{"2fa-secret":{"2fa-secret":"2FA Secret"},"button-group":{"button_group":"Button Group","choices":"Choices","choices_comment":"Enter JSON key value pairs with the saved value and text displayed.","theme":"Interface Theme","theme_comment":"Set the theme of the interface if supported","value":"值","flight":"Flight","cruise":"Cruise","run":"Run","bus":"Bus","bike":"Bike","train":"Train","car":"Car","other":"其它"},"calendar":{"calendar":"Calendar","min":"Minimum Date","min_comment":"Minimum date that can be chosen by the user","max":"Maximum Date","max_comment":"Maximum date that can be chosen by the user","formatting":"Date Format","formatting_comment":"Follows [Unicode Technical Standard](https://date-fns.org/v2.8.1/docs/format). If left blank, a relative date will be used."},"checkboxes":{"checkboxes":"Checkboxes","choices":"Choices","choices_comment":"Enter JSON key value pairs with the saved value and text displayed.","wrap":"Wrap with Delimiter","wrap_comment":"Wrap the saved value in a delimiter (improves searchability).","formatting":"Show display text","formatting_comment":"Render the values as the display values","display_text":"Display Text","value":"值","option":"Option","single":"Single Column","single_comment":"Display Checkboxes in single column","draggable":"Draggable Checkboxes","draggable_comment":"Enable sorting by draggable checkboxes","allow_other":"Allow Other","allow_other_comment":"Allow an additional custom option"},"checkboxes-relational":{"checkboxes_relational":"Checkboxes Relational","grid":"Grid","grid_comment":"Number of items to show in a row","item_template":"Item Template","item_template_comment":"How to display values on the single item layouts","item_template_placeholder":"{{name}} — {{first_name}}","listing_template":"Listing Template","listing_template_comment":"How to display values on the listing layouts.<br>You\'ll need to prepend the collection name","listing_template_placeholder":"{{movie.name}} — {{member.first_name}}"},"code":{"code":"Code","template":"Template","template_comment":"Provide a template the user can use to get started with","language":"Language","language_comment":"Set the programming language to use","lineNumber":"Line Number","lineNumber_comment":"Show line numbers","loc":"No lines of {lang} | One line of {lang} | {count} lines of {lang}","fill_template":"Fill with Template"},"collections":{"collections":"集合","placeholder":"Placeholder","placeholder_comment":"Static text that shown before a value is selected","placeholder_default":"Choose a collection...","option":"Option","include_system":"Include System","include_system_comment":"Include system collections in the options"},"color":{"color":"Color","format":"Output Format","format_comment":"In what data format to save the value","palette":"Palette","palette_comment":"Add color options as hex values","palette_only":"Palette Only","palette_only_comment":"Only allow the user to pick from the palette"},"color-palette":{"color-picker":"Color Picker"},"date":{"date":"Date","min":"Minimum date","min_comment":"Minimum date that can be chosen by the user","max":"Maximum date","max_comment":"Maximum date that can be chosen by the user","localized":"Localized","localized_comment":"Show the date localized in the output","relative":"Show relative date","relative_comment":"Show the date relatively (eg 2 days ago)","icon_left":"Icon Left","icon_left_comment":"Choose an optional icon to display on the left of the input","icon_right":"Icon Right","icon_right_comment":"Choose an optional icon to display on the right of the input"},"datetime":{"datetime":"Datetime","min":"Minimum time","min_comment":"Minimum time that can be chosen by the user","max":"Maximum time","max_comment":"Maximum time that can be chosen by the user","localized":"Localized","localized_comment":"Show the date localized in the output","relative":"Show relative time","relative_comment":"Show the time relatively (eg 50 minutes ago)","icon_left":"Icon Left","icon_left_comment":"Choose an optional icon to display on the left of the input","icon_right":"Icon Right","icon_right_comment":"Choose an optional icon to display on the right of the input","utc":"Save as UTC","utc_comment":"Save to and display from UTC","default_to_current_datetime":"Default to current datetime","default_to_current_datetime_comment":"Sets the default value to current datetime","format":"Format","format_comment":"The DateTime format to use for the input"},"datetime-created":{"datetime_created":"Datetime Created","relative":"Show relative time","relative_comment":"Show the time relatively (eg 50 minutes ago)","now":"You are creating this now","unknown":"Unknown"},"datetime-updated":{"datetime_updated":"Datetime Updated","relative":"Show relative time","relative_comment":"Show the time relatively (eg 50 minutes ago)","now":"You are creating this now","unknown":"Unknown"},"divider":{"divider":"Divider","style-name":"Divider style","style-comment":"Change the style of the Divider","weight-name":"Thickness of the line","weight-comment":"Change the thickness of the line","input-name":"Divider text","input-comment":"Type your text here","desc-name":"Divider description","desc-comment":"Add here a description","hr-name":"HR","hr-comment":"Display a horizontal rule?","margin-name":"Extra Margin","margin-comment":"Add extra margin above interface"},"dropdown":{"dropdown":"Dropdown","choices":"Choices","choices_comment":"Enter JSON key value pairs with the saved value and text displayed.","placeholder":"Placeholder","placeholder_comment":"Static text that shown before a value is selected","option":"Option","formatting":"Show display text","formatting_comment":"Render the values as the display values","placeholder_default":"Choose an option...","icon":"圖示","icon_comment":"Choose an optional icon to display on the left of the input","options_invalid":"The JSON options provided for the dropdown are invalid:","allow_other":"Allow Other","allow_other_comment":"Allow the user to add their own value"},"file":{"file":"檔案","view_type":"View Type","view_type_comment":"Select in what way you want to view the files","view_options":"View Options","view_options_comment":"Set the view options to use for the files","view_query":"View Query","view_query_comment":"Set the view query to use for the files","filters":"Filters","filters_comment":"What filters to use","accept":"Accept File Types","accept_comment":"Set a list of MIME types that can be picked","allow_delete":"Allow Delete","allow_delete_comment":"Allows the user to permanently delete the related file through the file interface","crop_preview":"Crop File Preview","crop_preview_comment":"Crops the file preview to fill the available space."},"file-preview":{"file_preview":"File Preview","edit":"Editing Options"},"file-size":{"file_size":"File Size","placeholder":"Placeholder","placeholder_comment":"Enter placeholder text","format":"Format value","format_comment":"Show the value in a human readable way (e.g. 10MB)","format_input":"Format input","format_input_comment":"Enter the value using a dropdown for units","decimal":"Decimal","decimal_comment":"Show the value in decimal counting (10MB vs 10MiB)","crop_preview":"Crop Preview Images"},"files":{"files":"檔案","visible_columns":"Visible Columns","visible_columns_comment":"Add a CSV of columns you want to display as preview","preferences":"Listing View Preferences","preferences_comment":"Set what options to use for the modal","relation_not_setup":"The relationship hasn\'t been configured correctly","template":"Display Template","template_comment":"Choose how to display values on the item layouts","template_placeholder":"{{movie.name}} — {{member.first_name}}","allow_create":"Allow Create","allow_create_comment":"Allow the user to create a new item from this interface","allow_select":"Allow Select","allow_select_comment":"Allow the user to select an existing item","accept":"Accept File Types","accept_comment":"Set a list of MIME types that can be picked","edit_item":"Edit"},"hashed":{"hashed":"Hashed","hide":"Hide Value","hide_comment":"Display dots instead of the characters you enter","placeholder":"Placeholder","placeholder_comment":"Enter placeholder text","show_hash":"Show the hashed output","show_hash_comment":"Display the saved hash","hashing_type":"Hashing Type","hashing_type_comment":"What method of hashing to use","width":"Size","width_comment":"Set what width to use for the input","auto":"Automatic","small":"Small","medium":"Medium","large":"Large","secured":"Value Secured"},"icon":{"icon":"圖示","search_placeholder":"Search for an icon..."},"interface-options":{"interface-options":"Interface Options","interface-field":"Interface Field","placeholder-comment":"The field that holds the name of the interface","placeholder-default":"Enter a field name..."},"interface-types":{"interface-types":"Interface types","interface-field":"Interface Field","placeholder-comment":"The field that holds the name of the interface","placeholder-default":"Enter a field name..."},"interfaces":{"interfaces":"介面","placeholder":"Placeholder","placeholder_comment":"Static text that shown before a value is selected","placeholder_default":"Choose an interface","option":"Option","relational":"Include relational interfaces","include_status":"Include the status interfaces"},"json":{"template":"Template","template_comment":"Provide a template the user can use to get started with"},"key-value":{"key_interface":"Key Interface","key_data_type":"Key Data Type","key_options":"Key Interface Options","value_interface":"Key Interface","value_data_type":"Key Data Type","value_options":"Key Interface Options"},"language":{"input":"Language","select_language":"Select a language...","limit":"Limit to Directus Availability","limit_comment":"Only show languages that are available as translations in Directus"},"many-to-many":{"m2m":"Many to Many","visible_columns":"Visible Columns","visible_columns_comment":"Add a CSV of columns you want to display as preview","preferences":"Listing View Preferences","preferences_comment":"Set what options to use for the modal","relation_not_setup":"The relationship hasn\'t been configured correctly","template":"Display Template","template_comment":"Choose how to display values on the item layouts","template_placeholder":"{{movie.name}} — {{member.first_name}}","allow_create":"Allow Create","allow_create_comment":"Allow the user to create a new item from this interface","allow_select":"Allow Select","allow_select_comment":"Allow the user to select an existing item"},"many-to-one":{"m2o":"Many to One","template":"Dropdown Template","template_comment":"How to format the dropdown options","visible_fields":"Visible Fields","visible_fields_placeholder":"title,author","visible_fields_note":"CSV of fields visible when selecting an item in the modal","template_placeholder":"{{title}} — {{author}}","placeholder":"Placeholder","placeholder_comment":"Enter placeholder text","preferences":"Listing View Preferences","preferences_comment":"Set what options to use for the modal","relationship_not_setup":"The relationship hasn\'t been configured correctly","icon":"圖示","icon_comment":"Choose an optional icon to display on the left of the input","select_one":"Select one","threshold":"Threshold","threshold_comment":"The number of items after which a modal will be used instead of a dropdown"},"map":{"map":"Map","choices":"choices","choices_comment":"Enter JSON key value pairs with the saved value and text displayed.","theme":"Interface Theme","theme_comment":"Set the theme of the interface if supported","value":"值","map_lat":"Default Latitude","map_lat_comment":"Map will be centered at this latitude","map_lng":"Default Longitude","map_lng_comment":"Map will be centered at this longitude","height":"Height","default_zoom":"Default Zoom","default_zoom_comment":"Default zoom level of the map","max_zoom":"Max Zoom","max_zoom_comment":"Maximum zoom allowed in the map","no_location":"No location found","user_location_error_blocked":"You\'ve disabled the location access. Kindly enable it from the browser addressbar to auto detect your location.","user_location_error":"There was an error while trying to get your location. Please try again.","address_to_code":"Address Input","address_to_code_comment":"Add an input field to automatically get the geocodes from an address. Uses <a href=\\"https://wiki.openstreetmap.org/wiki/Nominatim\\">Nominatim</a>. Please check their usage policy.","address_to_code_error":"No geocode found for this address","clear_location":"Clear Location","my_location":"Set My Location","address_location":"Set Address Location"},"markdown":{"markdown":"Markdown","edit":"Edit","preview":"Preview","tabbed_preview":"Tabbed Preview","tabbed_preview_comment":"How to display the editor and preview","tabbed_preview_on":"Tabbed Preview","tabbed_preview_off":"Side-by-side Preview","rows":"Rows","rows_comment":"The starting number of text rows available","placeholder":"Placeholder","placeholder_comment":"Enter placeholder text"},"multiselect":{"multiselect":"Multi-Select","choices":"Choices","choices_comment":"Enter JSON key value pairs with the saved value and displayed text","placeholder":"Placeholder","placeholder_comment":"Enter placeholder text","size":"Size","size_comment":"Number of options visible before scrolling","option":"Option","wrap":"Wrap with Delimiter","wrap_comment":"Wrap the values with a pair of delimiters to allow strict searching for a single value","format":"Browse Format","format_comment":"The output format on the Browse Items page"},"numeric":{"numeric":"Numeric","placeholder":"Placeholder","placeholder_comment":"Enter placeholder text","localized":"Localized","localized_comment":"Localize the output to the user\'s locale","icon_left":"Icon Left","icon_left_comment":"Choose an optional icon to display on the left of the input","icon_right":"Icon Right","icon_right_comment":"Choose an optional icon to display on the right of the input","monospace":"Monospace","monospace_comment":"Use a monospace font"},"one-to-many":{"o2m":"One to Many","select_items":"Select the items","relation_not_setup":"The relationship hasn\'t been configured correctly","visible_columns":"Visible Columns","visible_columns_comment":"Add a CSV of columns you want to display as preview","preferences":"Listing View Preferences","preferences_comment":"Set what options to use for the modal","template":"Display Template","template_comment":"How to format value on the item browse display","template_placeholder":"{{title}} — {{author}}","allow_create":"Allow Create","allow_create_comment":"Allow the user to create a new item from this interface","allow_select":"Allow Select","allow_select_comment":"Allow the user to select an existing item","delete_mode":"Delete mode","delete_mode_comment":"What to do when the user deselects an item","sort_field":"Sort Field","sort_field_comment":"The field to store the sort value in"},"password":{"password":"密碼","hide":"Hide Value","hide_comment":"Display dots instead of the characters you enter","placeholder":"Placeholder","placeholder_comment":"Enter placeholder text","confirm_placeholder":"Confirm password...","show_hash":"Show the hashed output","show_hash_comment":"Display the saved hash","hashing_type":"Hashing Type","hashing_type_comment":"What method of hashing to use"},"preview":{"preview":"Preview","url_template":"URL Template","url_template_comment":"A mustache template for a URL to preview content","preview_item":"Preview this item"},"primary-key":{"primary_key":"主鍵","immutable":"Can not be changed","monospace":"Monospace","monospace_comment":"Use a monospace font"},"radio-buttons":{"radio":"Radio Buttons","choices":"Choices","choices_comment":"Enter JSON key value pairs with the saved value and text displayed.","option":"Option","format":"Browse Format","format_comment":"The output format on the Browse Items page"},"rating":{"rating":"Rating","value":"值","active_color":"Active Color","active_color_comment":"Active color of selected stars","max_stars":"Max Stars","max_stars_comment":"Number of maximum rating allowed","display":"Display","display_comment":"How to display rating values"},"repeater":{"repeater":"Repeater","template":"Display Template","template_comment":"How to format value on the item browse display and inline preview","template_placeholder":"{{title}} — ({{author}})","fields":"欄位","fields_comment":"What fields to show in each repeated row","limit":"Limit","limit_comment":"Maximum amount of rows the user can add","duplicable":"Duplicable rows","duplicable_comment":"Whether to make rows duplicable or not","structure":"Structure","structure_comment":"Whether to save the JSON as an array of objects or single object with unique keys","structure_key":"Structure Key Field","structure_key_comment":"When using an object for the JSON structure, this value controls what field to use for the key values","placeholder":"Placeholder","placeholder_comment":"The value that shows up instead of the template if there\'s no value entered yet","create_item_text":"Create Item Text","create_item_text_comment":"Text that\'s displayed in the button that adds a new row to the repeater"},"slider":{"slider":"Slider","min":"Minimum","min_comment":"The minimum valid value","max":"Maximum","max_comment":"The maximum valid value","step":"Step","step_comment":"Increments at which the value can be set","unit":"Unit","unit_comment":"Show an unit next to the slider value, e.g. 15 Pounds"},"slug":{"slug":"Slug","placeholder_name":"Placeholder","placeholder_comment":"The placeholder text to show","force_lowercase":"Force Lowercase","force_lowercase_comment":"Makes sure the slug is in lowercase","mirrored_field":"Mirrored Field","mirrored_field_comment":"Keep the slug up to date with another (text) field","only_on_create":"Only on Create","only_on_create_comment":"Allow the slug to be edited only when creating a new item"},"sort":{"sort":"排序"},"status":{"status":"狀態","status_mapping":"Status Mapping","status_mapping_comment":"Enter JSON status options","simple_badge":"Simple Badge","simple_badge_comment":"Displays a colored dot on the item listing page.","published":"Published","under_review":"Under Review","draft":"Draft","deleted":"Deleted"},"tags":{"tags":"Tags","alphabetize":"Alphabetize tags","alphabetize_comment":"Will rearrange tags to be alphabetical","lowercase":"Force Lowercase","lowercase_comment":"Convert all tags to lowercase","wrap":"Wrap with delimiter","wrap_comment":"Wrap the values with a pair of delimiters to allow strict searching for a single value","format":"Format Value","format_comment":"Convert the tags to Title Case when displaying the value","sanitize":"Sanitize","sanitize_comment":"Removes any non-alphanumeric characters and converts spaces to hyphens","placeholder_text":"Type a tag and then hit enter or comma...","icon_left":"Icon Left","icon_left_comment":"Choose an optional icon to display on the left of the input","icon_right":"Icon Right","icon_right_comment":"Choose an optional icon to display on the right of the input","validation":"驗證","validation_comment":"A RegEx to check each individual value against","validation_message":"Validation Message","validation_message_comment":"A short message to show users if tag validation fails","validation_message_default":"Please enter a valid tag"},"text-input":{"input":"Text Input","placeholder":"Placeholder","trim":"Trim","trim_comment":"Trim surrounding whitespace from the value before saving","char_count":"Show Character Count","char_count_comment":"Show the remaining characters available","icon_left":"Icon Left","icon_left_comment":"Choose an optional icon to display on the left of the input","icon_right":"Icon Right","icon_right_comment":"Choose an optional icon to display on the right of the input","format":"Pretty Output","format_comment":"Convert the value to title case","monospace":"Monospace","monospace_comment":"Use a monospace font","auto":"Automatic","small":"Small","medium":"Medium","large":"Large"},"textarea":{"textarea":"Text-Area","rows":"Rows","rows_comment":"The number of text rows available for the input before scrolling","placeholder":"Placeholder","placeholder_comment":"Enter placeholder text","serif":"Serif Font","serif_comment":"Use a larger, serif typeface"},"time":{"time":"Time","include_seconds":"Include seconds","include_seconds_comment":"Include seconds in the interface","24hour":"Display 24 hour clock","24hour_comment":"Show the time in 24-hour format (eg.: 15:30)"},"switch":{"switch":"Switch","label_on":"Label (On)","label_on_comment":"Label to show next to the toggle when the toggle is on","label_off":"Label (Off)","label_off_comment":"Label to show next to the toggle when the toggle is off","checkbox":"Show as Checkbox","checkbox_comment":"Display a checkbox instead of the default switch"},"toggle-icon":{"toggle-icon":"Toggle Icon","text-inactive-name":"Inactive Text","text-inactive-comment":"Text next to the inactive icon","text-inactive-placeholder":"Enter your text here","icon-inactive-name":"Inactive Icon","icon-inactive-comment":"Choose an inactive icon","color-inactive-name":"Inactive Color","color-inactive-comment":"Choose the inactive color","text-active-name":"Active Text","text-active-comment":"Text next to the active icon","text-active-placeholder":"Enter your text here","icon-active-name":"Active Icon","icon-active-comment":"Choose an active icon","color-active-name":"Active Color","color-active-comment":"Choose the active color"},"translation":{"translation":"Translation","language_field":"Language Field","language_field_comment":"The field that holds the language code in the related collection","languages":"Languages","template":"Display Template","template_comment":"Choose how to display values on the item layouts","template_placeholder":"{{title}} — {{body}}"},"user":{"user":"User","avatar":"Avatar","name":"名稱","template":"Template","template_comment":"How to format the users in the dropdown","placeholder":"Placeholder","placeholder_comment":"Add a placeholder"},"owner":{"owner":"Owner","avatar":"Avatar","name":"名稱","template":"Template","template_comment":"How to display the user on the item detail page","display":"Display","display_comment":"How to display the user on the item browse page","you":"You will be the creator","unknown":"Unknown"},"user-roles":{"user-roles":"User Role","choose_role":"Choose a role...","relational":"Relational","relational_comment":"Save as a relational record","show_public":"Show public role"},"user-updated":{"user_updated":"User Updated","avatar":"Avatar","name":"名稱","template":"Template","template_comment":"How to display the user on the item detail page","display":"Display","display_comment":"How to display the user on the item browse page","you":"You will be the updater","unknown":"Unknown"},"wysiwyg":{"toolbar":"Toolbar Options","toolbar_comment":"Show, hide, and reorder toolbar options","custom_formats":"Custom Formats","custom_formats_comment":"Custom HTML wrappers for content","tinymce_options":"TinyMCE Options","tinymce_options_comment":"Override any of [the TinyMCE init options](https://www.tiny.cloud/docs/configure/)."}}}')}}]);
//# sourceMappingURL=lang-interfaces-zh-TW-interfaces-json.0356da3c.js.map