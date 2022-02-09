import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnChanges {


  @Input() searchResults: any;
  // @Input() selectedCountries: any = [];
  // @Input() selectedFileTypes: any = [];
  // @Input() selectedBrands: any = [];
  // @Input() selectedStudyTypes: any = [];
  // selectedCountries : any;

  @Output() updateSearchresult: EventEmitter<any> = new EventEmitter<any>();
  // searchResultsBackup = this.searchResults;

  folders: any;
  tags: any;
  industries: any;

  countries: any;
  documentTypes: any;
  studyMethods: any;

  folderMap: any;
  tagMap: any;
  industryMap: any;

  countryMap: any;
  documentTypeMap: any;
  studyMethodMap: any;

  selectedFolders: any = {};
  selectedTags: any = {};
  selectedIndustries: any = {};

  selectedCountries: any = {};
  selectedDocumentTypes: any = {};
  selectedStudyMethods: any = {};
  constructor() { }



  // updateTag1(folderindex: number) {

  //   this.selectedCountries[folderindex].status = !this.selectedCountries[folderindex].status;

  // }
  // updateTag2(fileindex: number) {

  //   this.selectedFileTypes[fileindex].status = !this.selectedFileTypes[fileindex].status;

  // }
  // updateTag3(brandindex: number) {

  //   this.selectedBrands[brandindex].status = !this.selectedBrands[brandindex].status;

  // }
  // updateTag4(studyindex: number) {

  //   this.selectedStudyTypes[studyindex].status = !this.selectedStudyTypes[studyindex].status;

  // }
  updateFilter(type: string, value: string) {
    switch (type) {
      case 'country': {
        if (this.selectedCountries[value]) {
          this.selectedCountries[value] = false;
        } else {
          this.selectedCountries[value] = true;
        }
        break;
      }
      case 'documentType': {
        if (this.selectedDocumentTypes[value]) {
          this.selectedDocumentTypes[value] = false;
        } else {
          this.selectedDocumentTypes[value] = true;
        }
        break;
      }
      case 'studyMethod': {
        if (this.selectedStudyMethods[value]) {
          this.selectedStudyMethods[value] = false;
        } else {
          this.selectedStudyMethods[value] = true;
        }
        break;
      }
    }
    this.filterResults();
  }

  updateFolderFilter(folder: any) {
    if (this.selectedFolders[folder.folderId]) {
      this.selectedFolders[folder.folderId] = false;
    } else {
      this.selectedFolders[folder.folderId] = true;
    }
    this.filterResults();

  }

  updateTagFilter(tag: string) {
    if (this.selectedTags[tag]) {
      this.selectedTags[tag] = false;
    } else {
      this.selectedTags[tag] = true;
    }
    this.filterResults();
  }

  updateIndustriesFilter(industry: string) {
    if (this.selectedIndustries[industry]) {
      this.selectedIndustries[industry] = false;
    } else {
      this.selectedIndustries[industry] = true;
    }
    this.filterResults();
  }

  filterResults() {
    const resultObject: any = {};
    let executed = false;
    for (let x in this.selectedFolders) {
      if (this.selectedFolders[x]) {
        executed = true;
        this.folderMap[x].map((item: any) => {
          resultObject[item] = {};
        })

      }
    }

    for (let x in this.selectedTags) {
      if (this.selectedTags[x]) {
        executed = true;
        this.tagMap[x].map((item: string | number) => {
          resultObject[item] = {};
        })

      }
    }

    for (let x in this.selectedIndustries) {
      if (this.selectedIndustries[x]) {
        executed = true;
        this.industryMap[x].map((item: string | number) => {
          resultObject[item] = {};
        })

      }
    }

    for (let x in this.selectedCountries) {
      if (this.selectedCountries[x]) {
        executed = true;
        this.countryMap[x].map((item: string | number) => {
          resultObject[item] = {};
        })

      }
    }

    for (let x in this.selectedDocumentTypes) {
      if (this.selectedDocumentTypes[x]) {
        executed = true;
        this.documentTypeMap[x].map((item: string | number) => {
          resultObject[item] = {};
        })

      }
    }

    for (let x in this.selectedStudyMethods) {
      if (this.selectedStudyMethods[x]) {
        executed = true;
        this.studyMethodMap[x].map((item: string | number) => {
          resultObject[item] = {};
        })

      }
    }

    if (executed) {
      this.searchResults.map((search: { id: any }) => {
        if (resultObject[search.id]) {
          resultObject[search.id] = search;
        }
      })


      this.updateSearchresult.emit(Object.values(resultObject))
    } else {
      this.updateSearchresult.emit(this.searchResults)
    }
    console.log("resultobj", this.updateSearchresult);
  }

  getFolders() {

    const folderMap: any = {};
    const tagMap: any = {};
    const industryMap: any = {};

    const countryMap: any = {};
    const documentTypeMap: any = {};
    const studyMethodMap: any = {};


    const filterFolder: any = [];
    this.searchResults.map((result: any) => {
      result.folders.map((folder: { folderId: any; }) => {

        if (folderMap[folder.folderId]) {
          folderMap[folder.folderId].push(result.id)
        } else {
          filterFolder.push(folder);
          folderMap[folder.folderId] = [result.id]
        }




      })
      result.tags.map((tagname: string | number) => {
        if (tagMap[tagname]) {
          tagMap[tagname].push(result.id)
        } else {
          tagMap[tagname] = [result.id]
        }
      })

      if (industryMap[result.industry]) {
        industryMap[result.industry].push(result.id)
      } else {
        industryMap[result.industry] = [result.id]
      }

      result.countries.map((countryName: any) => {
        if (countryMap[countryName]) {
          countryMap[countryName].push(result.id)
        } else {
          countryMap[countryName] = [result.id]
        }
      })


      result.documentTypes.map((documentType: string | number) => {
        if (documentTypeMap[documentType]) {
          documentTypeMap[documentType].push(result.id)
        } else {
          documentTypeMap[documentType] = [result.id]
        }
      })

      if (studyMethodMap[result.studyMethod]) {
        studyMethodMap[result.studyMethod].push(result.id)
      } else {
        studyMethodMap[result.studyMethod] = [result.id]
      }


    })
    this.folderMap = folderMap;
    this.tagMap = tagMap;
    this.industryMap = industryMap;

    this.studyMethodMap = studyMethodMap;
    this.documentTypeMap = documentTypeMap;
    this.countryMap = countryMap;

    this.folders = filterFolder;
    this.tags = Object.keys(tagMap);
    this.industries = Object.keys(industryMap);

    this.countries = Object.keys(countryMap);
    this.studyMethods = Object.keys(studyMethodMap);
    this.documentTypes = Object.keys(documentTypeMap);

    console.log("sres", this.folders)
  }
  ngOnChanges() {
    console.log("fres", this.searchResults);
    this.getFolders();
  }


  ngOnInit(): void {
    this.getFolders();
    console.log("fff", this.searchResults);
    // const selectedCountries : any ={};
    // this.searchResults.map(doc=> {
    //   selectedCountries[doc.country.name] = doc.country;
    // })
  }

}
