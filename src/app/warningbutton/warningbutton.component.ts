import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warningbutton',
  templateUrl: './warningbutton.component.html',
  styles: [`
                a,
                a:visited,
                a:hover {
                  color: #1976d2;
                  text-decoration: none;
                }
                
                .card svg.material-icons path {
                    fill: #fff;
                  }
                
                  .card {
                    border-radius: 4px;
                    border: 1px solid #eee;
                    background-color: #fafafa;
                    height: 40px;
                    width: 200px;
                    margin: 0 8px 16px;
                    padding: 16px;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    transition: all 0.2s ease-in-out;
                    line-height: 24px;
                  }
                
                  #m-warning:hover {
                    transform: translateY(-3px);
                  }
                
                  #m-warning:hover .material-icons path {
                    fill: rgb(156, 156, 156);
                  }
                
                #m-warning {
                    background-color: red;
                    color: white;
                    font-weight: 700;
                }
            `]
})
export class WarningbuttonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
