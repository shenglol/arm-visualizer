import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Resource } from 'arm-visualizer-engine';
import { RESOURCE_TYPE_MAPPINGS } from './resource-type-mappings';

const ICON_DIR = 'assets/icons/svg/';
const DEFAULT_ICON_NAME = 'Gear';

@Injectable()
export class ResourceService {
  getDisplayTypeName(resource: Resource): string {
    let mapping = RESOURCE_TYPE_MAPPINGS[resource.type] || {};
    let displayName = mapping.displayName || resource.type;

    if (displayName.length > 24) {
      displayName = displayName.substr(0, 21) + '...';
    }

    return displayName;
  }

  getIconUrl(resource: Resource): string {
    let mapping = RESOURCE_TYPE_MAPPINGS[resource.type] || {};
    let iconName = mapping.iconName || DEFAULT_ICON_NAME;

    return ICON_DIR + iconName + '.svg';
  }
}

