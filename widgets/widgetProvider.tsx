import React from 'react'
import TextTemplate from "./widgets/components/TextTemplate";
import Connection from "./utils/connection";
import Ui from "./utils/ui";


export const widgetsProvider = function (connection: Connection, ui: Ui) {
  return {
    "cnv-plugins-text-template": function (props) {
      return <TextTemplate {...props} connection={connection} ui={ui} />;
    },

  }
};
