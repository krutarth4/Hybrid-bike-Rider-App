import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
  // here all the user settings will be saved 
export class SettingsPage implements OnInit {

  constructor(private storage:StorageService) { }

  ngOnInit() {


  }

  // 
  maxspeed;
  minSpeed;
  userName;

/**
 * @click event is generated 
 * 
 * This method saves all the user login deatils from settings page 
 * 
 * all global variable by user will be added here , which helps in flexibility of some models used
 * all user input will be given a key and will be saved locally on users device 
 */
  
  saveForm() {
  }


  

}
