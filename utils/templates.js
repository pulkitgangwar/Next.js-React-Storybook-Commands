const template = {
  component: (fileName) => {
    return `
      import React from "react";
      import PropTypes from "prop-types";
          
        const ${fileName} = ({}) => {
            return (
                <div>This is ${fileName} component</div>
            )
        }
          
      ${fileName}.propTypes = {
          
      }
          
      export default ${fileName};
     `;
  },
  page: (fileName) => {
    return `
      const ${fileName} = ({}) => {
        return (
            <div>This is ${fileName} component</div>
          )
      }
          
      export default ${fileName};
              `;
  },
  story: (fileName) => {
    return `
      import React from "react";
          
      //import component here   
      //import ${fileName}Component from "";
          
      export default {
          title:"",  
          component:${fileName}Component 
      }
          
      const Template = (args) => <${fileName}Component {...args} />
          
      ${fileName}.args = {}
              `;
  },
};

module.exports = template;
