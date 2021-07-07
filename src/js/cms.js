import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import LetterPreview from "./cms-preview-templates/letters";
import BooksPreview from "./cms-preview-templates/books";
import ToursPreview from "./cms-preview-templates/tours";
import ContactPreview from "./cms-preview-templates/contact";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("letter", LetterPreview);
CMS.registerPreviewTemplate("books", BooksPreview);
CMS.registerPreviewTemplate("tours", ToursPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.init();
