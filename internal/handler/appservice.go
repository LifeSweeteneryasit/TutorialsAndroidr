/*******************************************************************************
 * Copyright © 2017-2018 VMware, Inc. All Rights Reserved.
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
 *******************************************************************************/

package handler

import (
	"net/http"

	"github.com/edgexfoundry/go-mod-registry/registry"
)

var data = make(map[string]string)

const AppServiceConfigurableFileName = "configuration.toml"

func HeartBeatAppService(w http.ResponseWriter, r *http.Request) {
	//TODO
}

func ListAppServicesProfile(w http.ResponseWriter, r *http.Request) {
	//TODO
}

func DeployConfigurableProfile(w http.ResponseWriter, r *http.Request) {
	//TODO
}

func DownloadConfigurableProfile(w http.ResponseWriter, r *http.Request) {
	//TODO
}

func ReceiveDataPostJSON(w http.ResponseWriter, r *http.Request) {
	//TODO
}

func ReceiveDataPostXML(w http.ResponseWriter, r *http.Request) {
	//TODO
}

func CurrentData(w http.ResponseWriter, r *http.Request) {
	//TODO
}

func initRegistryClientByServiceKey(serviceKey string, needVersionPath bool) (registry.Client, error) {
	//TODO
	return nil, nil
}
