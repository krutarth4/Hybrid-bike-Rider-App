import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Diagnostic } from "@awesome-cordova-plugins/diagnostic/ngx";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.page.html",
  styleUrls: ["./landing-page.page.scss"],
})
export class LandingPagePage implements OnInit {
  whileinappusebutton: boolean = false;
  locationbutton: boolean = false;
  allowallthetimebutton: boolean = false;
  whileinappusespinner: boolean = false;
  locationispinner: boolean = false;
  allowallthetimespinner: boolean = false;
  nextbutton: boolean = true;
  enableNextInterval;
  constructor(
    private diagnostic: Diagnostic,
    private platform: Platform,
    private ref: ChangeDetectorRef,
    private router: Router
  ) {
    this.enableNextInterval = setInterval(() => {
      this.enableNext();
    }, 1500);
  }

  // total number of permissions required
  totalPermissionRequired = 3;

  // Permissions granted
  permissionsGranted = 0;

  ngOnInit() {
    this.ref.detectChanges();
    if (!this.platform.is("android")) {
      this.goToHome(true, "platform not android ");
    } else {
      this.platform.ready().then(() => {
        this.permissionsGranted = 0;
        this.diagnostic.isGpsLocationEnabled().then((succ) => {
          this.locationispinner = true;
          console.log("location permission", succ);
          if (succ) {
            this.locationbutton = true;
            this.permissionsGranted++;
          } else {
            this.locationbutton = false;
          }
        });
        this.diagnostic
          .getLocationAuthorizationStatus()
          .then(async (suc) => {
            console.log("getlocationauthorizationstatues", suc);
            this.allowallthetimespinner = true;
            this.whileinappusespinner = true;
            if (suc == "GRANTED") {
              console.log("getLocationAuthorizationStatuses() ", suc);
              this.whileinappusebutton = true;
              this.allowallthetimebutton = true;
              this.permissionsGranted += 2;
            } else if (suc == "GRANTED_WHEN_IN_USE") {
              console.log("getLocationAuthorizationStatus() ", suc);
              this.whileinappusebutton = true;
              this.permissionsGranted++;
            } else {
              this.whileinappusebutton = false;
              this.allowallthetimebutton = false;
            }
          })
          .then(() => {
            setTimeout(() => {
              this.goToHome(false, "timeout");
            }, 1200);
          });
      });
    }
  }
  ionViewDidEnter() {
    // console.log("ionviewdidenter")
    this.goToHome(false, "didenter");
  }

  GetLocationPermission() {
    this.platform.ready().then(() => {
      this.diagnostic.switchToLocationSettings();
      this.diagnostic.registerLocationStateChangeHandler(async (res) => {
        console.log("Change in state of location", res);
        if (res == "high_accuracy") {
          this.changeLocationbutton();
          // this.permissionsGranted++;
          this.ngOnInit();
        } else {
          this.locationbutton = false;
        }
      });
    });
  }
  changeLocationbutton() {
    console.log("changelocation called");
    this.locationbutton = true;
    this.permissionsGranted++;
  }
  precision_WhileInUse() {
    this.platform.ready().then(() => {
      this.diagnostic
        .requestLocationAuthorization("when_in_use")
        .then((succ) => {
          console.log("precision while in use", succ);
          if (
            succ == "authorized_when_in_use" ||
            succ == "GRANTED_WHEN_IN_USE"
          ) {
            this.whileinappusebutton = true;
            this.permissionsGranted++;
          } else {
            this.whileinappusebutton = false;
          }
        });
    });
  }
  precision_allowAllTheTime() {
    this.platform.ready().then(() => {
      console.log("preciseallowalltheime");
      this.diagnostic.requestLocationAuthorization("always").then((succ) => {
        console.log("allowallthe time", succ);
        if (succ == "GRANTED") {
          this.allowallthetimebutton = true;
          this.permissionsGranted++;
        } else {
          this.allowallthetimebutton = false;
        }
      });
    });
  }

  enableNext() {
    if (this.permissionsGranted == this.totalPermissionRequired) {
      console.log("enabling next button");

      this.nextbutton = false;
      clearInterval(this.enableNextInterval);
      // ! go to home page automatically
    } else {
      this.nextbutton = true;
    }
  }

  goToHome(forced?: boolean, callLevel?) {
    console.log(
      "going home permission granted",
      this.permissionsGranted,
      "call level",
      callLevel
    );
    if (forced) {
      this.router.navigateByUrl("/home").then(
        () => {
          console.log("succesfull navigation ");
        },
        (err) => {
          console.log("Transition error from Tripproposal to home page", err);
          this.router.navigateByUrl("/home");
        }
      );
    }
    if (this.permissionsGranted == this.totalPermissionRequired) {
      this.router.navigateByUrl("/home").then(
        () => {
          console.log("succesfull navigation ");
        },
        (err) => {
          console.log("Transition error from landing to home page", err);
          this.router.navigateByUrl("/home");
        }
      );
    }
  }
  ionViewWillLeave() {
    clearInterval(this.enableNextInterval);
  }
}
