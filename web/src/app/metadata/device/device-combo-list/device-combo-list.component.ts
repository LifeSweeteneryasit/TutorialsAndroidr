/*******************************************************************************
 * Copyright © 2021-2022 VMware, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 *
 * @author: Huaqiao Zhang, <huaqiaoz@vmware.com>
 *******************************************************************************/

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Device } from '../../../contracts/v3/device';
import { MultiDeviceResponse } from '../../../contracts/v3/responses/device-response';
import { MetadataService } from '../../../services/metadata.service';

@Component({
  selector: 'app-device-combo-list',
  templateUrl: './device-combo-list.component.html',
  styleUrls: ['./device-combo-list.component.css']
})
export class DeviceComboListComponent implements OnInit {

  deviceList: Device[] = [];
  deviceNamesSelectedStr: string = '';

  private _deviceSelected: string[] = [];
  @Input()
  get deviceSelected(): string[] {return this._deviceSelected};
  set deviceSelected(deviceNames: string[]) {
    deviceNames.forEach((v,i) => {deviceNames[i] = v.trim()});
    this._deviceSelected = deviceNames;
    this.deviceNamesSelectedStr = this._deviceSelected.join(',');
  }
  @Output() deviceSelectedChange = new EventEmitter<string[]>();

  private _singleDeviceSelected: string;
  @Input()
  get singleDeviceSelected(): string {return this._singleDeviceSelected};
  set singleDeviceSelected(deviceName: string) {
    if (!deviceName) {// if undefined or null
      this._singleDeviceSelected = '';
    } else {
      this._singleDeviceSelected = deviceName.trim()
    }
    this.deviceNamesSelectedStr = this._singleDeviceSelected;
  }
  @Output() singleDeviceSelectedChange = new EventEmitter<string>();

  visible: boolean = false;
  @Input() validate: boolean = false;

  //single-Selection Mode indicates that if true indicates single-selection mode , else multiple-selection
  @Input() singleSelectionMode: boolean = false;

  pagination: number = 1;
  pageLimit: number = 5;
  pageOffset: number = (this.pagination - 1) * this.pageLimit;

  constructor(private metaSvc: MetadataService) {
    this._singleDeviceSelected = '';
  }

  ngOnInit(): void {
    this.getDeviceListPagination();
  }

  getDeviceListPagination() {
    this.metaSvc.allDevicesPagination(this.pageOffset, this.pageLimit).subscribe((data: MultiDeviceResponse) => {
      this.deviceList = data.devices;
    });
  }

  onSelectAll(event: any) {
    const checkbox = event.target;
    if (checkbox.checked) {
      this.deviceList.forEach(device => {
        if (this.deviceSelected.includes(device.name)) {
          return
        }
        this.deviceSelected.push(device.name)
      });
    } else {
      this.deviceList.forEach((device) => {
        if (this.deviceSelected.includes(device.name)) {
          this.deviceSelected.splice(this.deviceSelected.indexOf(device.name),1)
        }
      })
    }
    this.deviceSelectedChange.emit(this.deviceSelected);
    this.deviceNamesSelectedStr = this.deviceSelected.join(',');
  }

  isCheckedAll(): boolean {
    let checkedAll = true;
    this.deviceList.forEach((device) => {
      if (!this.deviceSelected.includes(device.name)) {
        checkedAll = false
      }
    })
    return checkedAll
  }

  isChecked(deviceName: string): boolean {
    if (this.singleSelectionMode)  {
      return this.singleDeviceSelected === deviceName
    }
    return this.deviceSelected.includes(deviceName)
  }

  selectSingleDevice(event: any, deviceName: string) {
    const checkbox = event.target;
    if (checkbox.checked) {
      this.singleDeviceSelected = deviceName
    } else {
      this.singleDeviceSelected = '';
    }
    this.deviceNamesSelectedStr = this.singleDeviceSelected
    this.singleDeviceSelectedChange.emit(this.singleDeviceSelected)
  }

  onSelectOne(event: any, deviceName: string) {
    if (this.singleSelectionMode)  {
      this.selectSingleDevice(event, deviceName)
      return
    }

    const checkbox = event.target;
    if (checkbox.checked) {
      this.deviceSelected.push(deviceName);
    } else {
      this.deviceSelected.splice(this.deviceSelected.indexOf(deviceName), 1);
    }
    this.deviceNamesSelectedStr = this.deviceSelected.join(',');
    this.deviceSelectedChange.emit(this.deviceSelected);
  }

  onPageSelected() {
    this.resetPagination();
    this.getDeviceListPagination();
  }

  prePage() {
    this.setPagination(-1);
    this.getDeviceListPagination();
  }

  nextPage() {
    this.setPagination(1);
    this.getDeviceListPagination();
  }

  setPagination(n?: number) {
    if (n === 1) {
      this.pagination += 1;
    } else if (n === -1) {
      this.pagination -= 1;
    }
    this.pageOffset = (this.pagination - 1) * this.pageLimit;
  }

  resetPagination() {
    this.pagination = 1;
    this.pageOffset = (this.pagination - 1) * this.pageLimit;
  }

  close(event: any) {
    this.visible = false;
  }

  toggle(event: any) {
    event.stopPropagation();
    if (this.visible) {
      this.visible = false;
      return
    }
    this.visible = true;
  }
}
