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

import { Versionable } from "./common/versionable";
import { Address } from './address';
import { DBTimestamp } from "./common/db-timestamp";

export interface Subscription extends Versionable, DBTimestamp {
    id: string,
    name: string,
    description: string,
    channels: Address[],
    receiver: string,
    categories: string[],
    labels: string[],
    resendLimit: number,
    resendInterval: string,
    adminState: string //oneof='LOCKED' 'UNLOCKED'
}
