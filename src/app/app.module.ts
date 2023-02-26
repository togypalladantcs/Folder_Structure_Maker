import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TreeFolderComponent } from './components/tree-folder/tree-folder.component';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeFolderComponent,
    TreeNodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
