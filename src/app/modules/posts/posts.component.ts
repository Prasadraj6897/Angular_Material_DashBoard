import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
interface IPost {
  id: string;
  author?: string;
  title?: string;
  category?: string;
  date?: string;

}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  dataSource!: MatTableDataSource<IPost>
  posts!:IPost[];
  columns: string[] = ['id', 'author', 'title', 'category', 'date']

  @ViewChild(MatSort, {static:true}) sort!: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator!: MatPaginator;

  constructor() { 
    this.posts = [{
      id:'1',
      author: "Prasad",
      title:"First",
      category: "book",
      date: "2021-8-24 14:14:14"
    },
    {
      id:'2',
      author: "Ruban",
      title:"second",
      category: "book",
      date: "2021-8-20 14:14:14"
    },
    {
      id:'3',
      author: "Tamil",
      title:"third",
      category: "tools",
      date: "2021-8-24 14:14:14"
    },
    {
      id:'4',
      author: "Karthi",
      title:"Fourth",
      category: "Glass",
      date: "2021-7-24 14:14:14"
    },
    {
      id:'5',
      author: "Selva",
      title:"Fifth",
      category: "book2",
      date: "2020-8-24 14:14:14"
    },
    {
      id:'6',
      author: "Nirmal",
      title:"FirSixthst",
      category: "book",
      date: "2021-8-24 14:14:14"
    },
    {
      id:'7',
      author: "BAlu",
      title:"Seventh",
      category: "book",
      date: "2021-8-24 14:14:14"
    }]

    this.dataSource = new MatTableDataSource(this.posts)
  }

 

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
// below are search functionality
  applyFilter(event:any){
    const filterValue = (event.target as HTMLInputElement).value;
    
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

}
