import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component'
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconsComponent } from './icons/icons.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CardComponent } from './card/card.component';
import { TabComponent } from './tab/tab.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CheckboxRadiobuttonComponent } from './checkbox-radiobutton/checkbox-radiobutton.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path:'typography',
    component:TypographyComponent
  },
  {
    path:'button',
    component:ButtonsComponent
  },
  {
    path:'button-toggle',
    component:ButtonToggleComponent
  },
  {
    path:'icons',
    component:IconsComponent
  },
  {
    path:'badges',
    component:BadgesComponent
  },
  {
    path:'progress-spinner',
    component:ProgressSpinnerComponent
  },
  {
    path:'progress-bar',
    component:ProgressBarComponent
  },
  {
    path:'sid-bar',
    component:SideBarComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'list',
    component:ListComponent
  },
  {
    path:'grid',
    component:GridComponent
  },
  {
    path:'expansion-panel',
    component:ExpansionPanelComponent
  },
  {
    path:'card',
    component:CardComponent
  },
  {
    path:'tab',
    component:TabComponent
  },
  {
    path:'stepper',
    component:StepperComponent
  },
  {
    path:'input',
    component:InputComponent
  },
  {
    path:'select',
    component:SelectComponent
  },
  {
    path:'auto-complete',
    component:AutoCompleteComponent
  },
  {
    path:'auto-complete',
    component:AutoCompleteComponent
  },
  {
    path:'checkbox-radiobutton',
    component:CheckboxRadiobuttonComponent
  },
  {
    path:'datepicker',
    component:DatepickerComponent
  },
  {
    path:'tooltip',
    component:TooltipComponent
  },
  {
    path:'snackbar',
    component:SnackbarComponent
  },
  {
    path:'dialog',
    component:DialogComponent
  },
  {
    path:'table',
    component:TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
