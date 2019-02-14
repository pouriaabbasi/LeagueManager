import { EventEmitter } from "@angular/core";

export class TableHeaderActionModel {
    name: string;
    action?: EventEmitter<any>;
    icon?: string;
    mustSelect?: boolean;
}