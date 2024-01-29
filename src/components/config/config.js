import { DefaultSchema } from 'wax-prosemirror-core';
import {
    BaseService, BaseToolGroupService, InlineAnnotationsService, AnnotationToolGroupService,
        FullScreenService , FullScreenToolGroupService
  } from 'wax-prosemirror-services';

    const config=()=> ({
        MenuService: [
          {
            templateArea: 'MainMenuToolBar',
            toolGroups: [
              'Base',
              {
                name: 'Annotations',
                more: [
                  'Superscript',
                  'Subscript',
                  'SmallCaps',
                  'Underline',
                  'StrikeThrough',
                ],
              },
              'FullScreen',
            ],
          },
        ],
      
        SchemaService: DefaultSchema,
      
        services: [
          new InlineAnnotationsService(),
          new AnnotationToolGroupService(),
          new BaseService(),
          new BaseToolGroupService(),
          new FullScreenService(),
          new FullScreenToolGroupService(),
        ],
      });
      export default config