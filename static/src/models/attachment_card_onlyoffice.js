/** @odoo-module **/

import { registerPatch } from '@mail/model/model_core';
import { attr, one } from '@mail/model/model_field';

registerPatch({
    name: 'AttachmentCard',
    fields: {
        showOnlyofficeButton: attr({
            compute() {
                return this.attachment.onlyofficeCanEdit || this.attachment.onlyofficeCanView;
            },
        }),
    },
});