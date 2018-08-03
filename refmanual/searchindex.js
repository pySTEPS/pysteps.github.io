Search.setIndex({docnames:["source/advection","source/cascade","source/index","source/io","source/noise","source/nowcasting","source/oflow","source/postprocessing","source/timeseries","source/utils","source/verification","source/visualization"],envversion:53,filenames:["source/advection.rst","source/cascade.rst","source/index.rst","source/io.rst","source/noise.rst","source/nowcasting.rst","source/oflow.rst","source/postprocessing.rst","source/timeseries.rst","source/utils.rst","source/verification.rst","source/visualization.rst"],objects:{"":{pysteps:[2,0,0,"-"]},"pysteps.advection":{"interface":[0,0,0,"-"],semilagrangian:[0,0,0,"-"]},"pysteps.advection.interface":{get_method:[0,1,1,""]},"pysteps.advection.semilagrangian":{extrapolate:[0,1,1,""]},"pysteps.cascade":{"interface":[1,0,0,"-"],bandpass_filters:[1,0,0,"-"],decomposition:[1,0,0,"-"]},"pysteps.cascade.bandpass_filters":{filter_gaussian:[1,1,1,""],filter_uniform:[1,1,1,""]},"pysteps.cascade.decomposition":{decomposition_fft:[1,1,1,""]},"pysteps.cascade.interface":{get_method:[1,1,1,""]},"pysteps.io":{"interface":[3,0,0,"-"],archive:[3,0,0,"-"],exporters:[3,0,0,"-"],importers:[3,0,0,"-"],nowcast_importers:[3,0,0,"-"],readers:[3,0,0,"-"]},"pysteps.io.archive":{find_by_date:[3,1,1,""]},"pysteps.io.exporters":{close_forecast_file:[3,1,1,""],export_forecast_dataset:[3,1,1,""],initialize_forecast_exporter_netcdf:[3,1,1,""]},"pysteps.io.importers":{import_bom_rf3:[3,1,1,""],import_fmi_pgm:[3,1,1,""],import_mch_gif:[3,1,1,""],import_odim_hdf5:[3,1,1,""]},"pysteps.io.interface":{get_method:[3,1,1,""]},"pysteps.io.nowcast_importers":{import_netcdf_pysteps:[3,1,1,""]},"pysteps.io.readers":{read_timeseries:[3,1,1,""]},"pysteps.noise":{"interface":[4,0,0,"-"],fftgenerators:[4,0,0,"-"],motion:[4,0,0,"-"],utils:[4,0,0,"-"]},"pysteps.noise.fftgenerators":{build_2D_tapering_function:[4,1,1,""],generate_noise_2d_fft_filter:[4,1,1,""],generate_noise_2d_ssft_filter:[4,1,1,""],initialize_nonparam_2d_fft_filter:[4,1,1,""],initialize_nonparam_2d_nested_filter:[4,1,1,""],initialize_nonparam_2d_ssft_filter:[4,1,1,""],initialize_param_2d_fft_filter:[4,1,1,""]},"pysteps.noise.interface":{get_method:[4,1,1,""]},"pysteps.noise.motion":{generate_bps:[4,1,1,""],initialize_bps:[4,1,1,""]},"pysteps.noise.utils":{compute_noise_stddev_adjs:[4,1,1,""]},"pysteps.nowcasts":{"interface":[5,0,0,"-"],simple_advection:[5,0,0,"-"],steps:[5,0,0,"-"]},"pysteps.nowcasts.interface":{get_method:[5,1,1,""]},"pysteps.nowcasts.simple_advection":{forecast:[5,1,1,""]},"pysteps.nowcasts.steps":{forecast:[5,1,1,""]},"pysteps.optflow":{"interface":[6,0,0,"-"],darts:[6,0,0,"-"],lucaskanade:[6,0,0,"-"]},"pysteps.optflow.darts":{DARTS:[6,1,1,""]},"pysteps.optflow.interface":{get_method:[6,1,1,""]},"pysteps.optflow.lucaskanade":{LucasKanade_features_tracking:[6,1,1,""],ShiTomasi_features_to_track:[6,1,1,""],clean_image:[6,1,1,""],declustering:[6,1,1,""],dense_lucaskanade:[6,1,1,""],interpolate_sparse_vectors:[6,1,1,""]},"pysteps.postproc":{probmatching:[7,0,0,"-"]},"pysteps.postproc.probmatching":{compute_empirical_cdf:[7,1,1,""],nonparam_match_empirical_cdf:[7,1,1,""],pmm_compute:[7,1,1,""],pmm_init:[7,1,1,""]},"pysteps.timeseries":{autoregression:[8,0,0,"-"],correlation:[8,0,0,"-"]},"pysteps.timeseries.autoregression":{adjust_lag2_corrcoef:[8,1,1,""],estimate_ar_params_yw:[8,1,1,""],iterate_ar_model:[8,1,1,""]},"pysteps.timeseries.correlation":{temporal_autocorrelation:[8,1,1,""]},"pysteps.utils":{"interface":[9,0,0,"-"],conversion:[9,0,0,"-"],dimension:[9,0,0,"-"],transformation:[9,0,0,"-"]},"pysteps.utils.conversion":{to_raindetph:[9,1,1,""],to_rainrate:[9,1,1,""],to_reflectivity:[9,1,1,""]},"pysteps.utils.dimension":{aggregate_fields:[9,1,1,""],aggregate_fields_time:[9,1,1,""],square_domain:[9,1,1,""]},"pysteps.utils.interface":{get_method:[9,1,1,""]},"pysteps.utils.transformation":{boxcox_transform:[9,1,1,""],boxcox_transform_test_lambdas:[9,1,1,""],dB_transform:[9,1,1,""]},"pysteps.verification":{detcatscores:[10,0,0,"-"],detcontscores:[10,0,0,"-"],ensscores:[10,0,0,"-"],plots:[10,0,0,"-"],probscores:[10,0,0,"-"],spatialscores:[10,0,0,"-"]},"pysteps.verification.detcatscores":{scores_det_cat_fcst:[10,1,1,""]},"pysteps.verification.detcontscores":{scores_det_cont_fcst:[10,1,1,""]},"pysteps.verification.ensscores":{ensemble_fss_skill:[10,1,1,""],ensemble_fss_spread:[10,1,1,""],rankhist_accum:[10,1,1,""],rankhist_compute:[10,1,1,""],rankhist_init:[10,1,1,""]},"pysteps.verification.plots":{plot_ROC:[10,1,1,""],plot_rankhist:[10,1,1,""],plot_reldiag:[10,1,1,""]},"pysteps.verification.probscores":{CRPS:[10,1,1,""],ROC_curve_accum:[10,1,1,""],ROC_curve_compute:[10,1,1,""],ROC_curve_init:[10,1,1,""],reldiag_accum:[10,1,1,""],reldiag_compute:[10,1,1,""],reldiag_init:[10,1,1,""]},"pysteps.verification.spatialscores":{compute_fss:[10,1,1,""]},"pysteps.visualization":{animations:[11,0,0,"-"],motionfields:[11,0,0,"-"],precipfields:[11,0,0,"-"],utils:[11,0,0,"-"]},"pysteps.visualization.animations":{animate:[11,1,1,""]},"pysteps.visualization.motionfields":{quiver:[11,1,1,""],streamplot:[11,1,1,""]},"pysteps.visualization.precipfields":{get_colormap:[11,1,1,""],plot_precip_field:[11,1,1,""]},"pysteps.visualization.utils":{parse_proj4_string:[11,1,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:function"},terms:{"2007mwr2123":2,"2011jtecha1496":2,"default":[0,3,4,6,11],"export":2,"float":[0,1,3,4,5,6,7,8,9,10,11],"function":[0,1,2,3,4,5,6,7,11],"g\u00f6ber":2,"import":2,"int":[0,1,3,4,5,6,9,10,11],"new":[7,9],"return":[0,1,3,4,5,6,7,8,9,10,11],"short":[2,4],"true":[0,3,4,5,6,9,10,11],"while":9,EPS:8,For:[4,7],Not:[1,6],Res:[],The:[0,1,2,3,4,5,6,7,8,9,10,11],Using:2,__init__:4,abbrevi:3,about:[6,11],abov:[4,6,10],accept:[2,6],accumul:[2,3,10],accutim:3,acrr:3,adapt:[],add:11,added:[5,8,9],addit:[4,6],adjust:[4,5,6,8],adjust_lag2_corrcoef:8,advect:[2,5,6],after:[3,5],aggreg:9,aggregate_field:9,aggregate_fields_tim:9,algorithm:6,all:[0,1,4,5,6,9,10],alla:2,allow:[3,6],along:[0,3],also:8,alwai:1,amd:[],analysi:2,ani:[0,1,3,9],anim:2,appear:2,append:3,appl:[],appli:[0,2,4,5,6,8,9],applic:[2,4,5,11],approach:[4,5],apread:[],aqc:3,aquir:3,ar_ord:5,archiv:2,area:[4,5,6,10],argument:[0,1,3,4,5,9],arrai:[0,1,3,4,5,6,7,8,9,10,11],array_lik:[1,3,4,6,7,8,10],arrow:11,art:[2,6],ascend:[3,8],asl:[],assess:2,assign:[3,6,9,10],associ:3,assum:[1,4,5,8],atmo:[],atmospher:2,atmosr:2,attemp:9,attribut:[3,9],aug:2,autocorrel:8,autoregress:[2,5],avail:[0,3,4,5,6],averag:[4,6,10],axes:11,axi:[3,6,9,10,11],back:9,backward:0,band:1,bandpass:[1,4,5,9],bandpass_filt:[2,4,5],bandpass_filter_method:5,base:[2,4,5,6],basemap:11,basemap_resolut:11,basi:6,been:[4,5],befor:3,begin:[3,11],being:6,below:[4,5,10],besic:2,between:[0,2,3,4,5,6,10],bia:4,bin:[7,10],bin_count:10,bin_edg:7,bin_edges_1:7,bin_edges_2:7,binari:6,bit:[3,6],black:11,block:6,block_size_st:6,bom:3,bom_rf3:3,bool:[0,3,4,5,6,9,10,11],border:[3,11],both:9,bowler:[2,4,5],box:[3,9],boxcox:9,boxcox_transform:9,boxcox_transform_test_lambda:9,bps200601:[],bps:4,brocker:[],brown:2,brox:6,bruhn:6,buffer:5,build_2d_tapering_funct:4,bureau:3,calcul:[4,10],call:[3,5,6],callabl:[0,1,3,4,5,6,9],callback:5,can:[3,4,5,9,10],casa:2,cascad:[2,4,5,8],cascade_level:1,categor:10,categori:10,cdf:7,cdf_1:7,cdf_2:7,cell:6,center:1,central:1,central_freq:1,certain:5,challeng:2,chandrasekar:2,chang:7,character:6,choic:[3,5],chunk:6,cker:2,clean:6,clean_imag:6,clev:11,clevsstr:11,clg:6,close:[3,11],close_forecast_fil:3,cmap:11,coauthor:[],coeffici:[6,8,9],coeffient:8,collect:11,color:11,colorbar:11,colormap:11,colorscal:11,column:6,combin:[6,10],compar:4,compat:[1,3,11],compil:6,compon:[0,4,5,6],composit:3,compress:3,comput:[0,1,4,5,6,7,8,10],compute_area:10,compute_empirical_cdf:7,compute_fss:10,compute_noise_stddev_adj:[4,5],condit:[4,5],condition:[4,5],conform:3,consecut:3,conserv:7,consid:6,consist:3,constant:[4,6],construct:11,contain:[0,1,3,4,5,6,8,9,10,11],content:2,continent:2,continu:[2,10],control:11,convect:2,convers:2,convert:[6,9,11],coordin:[3,6,7,10,11],copi:9,corner:[3,6,11],corr_p:10,correct:[4,11],correl:[2,4],correspond:[0,1,3,6,7,8,9,10],correspondign:3,count:[7,10],covari:6,cover:1,cox:[3,9],cpu:[4,5],creat:[3,10],criteria:3,crop:9,crp:10,csi:10,cumul:7,current:[3,5,10],curv:10,d_prev:0,dalla:[],dart:2,dask:[4,5],data:[3,5,6,8,9,11],dataset:[3,9],date:[2,3],datetim:3,db_transform:9,dbr:4,dbz:[3,9,11],dbzh:3,decibel:9,decim:11,decl_grid:6,declust:6,decomp_method:[4,5],decompos:[1,4],decomposit:[2,4,5,9],decomposition_fft:1,decomposition_xxx:1,defin:[3,4,9,11],definit:[3,10,11],degre:4,delta:9,dens:6,dense_lucaskanad:6,densiti:11,depend:[2,3,4],depth:9,deriv:6,describ:[1,3,4,5],descript:[0,1,2,3,4,5,6,9],detail:[2,6],detcatscor:2,detcontscor:2,detect:[6,10],determin:[1,4],determinist:[5,10],deviat:[1,4,5,8],dft:6,dfw:2,diagram:[2,10],dict:[1,3,4,5,7,9,10,11],dictionari:[1,3,4,5,9,11],differ:[1,4],dimens:[1,2,3],dimension:[0,1,3,4,5,6,8,11],direct:[3,4],directori:3,disabl:5,discard:6,displac:0,dist:4,distanc:6,distribut:[4,5,7],divid:10,doc:6,docstr:3,document:[1,3,5,6,11],doe:0,doi:2,domain:[0,1,4,6,9],domain_s:6,done:4,donorm:4,doplot:4,dotcrp:2,downscal:[2,4],draw:11,drawlonlatlin:11,dummi:1,dure:6,each:[1,3,4,5,6,7,8,10,11],earth:2,ebert:2,echo:6,edg:7,effect:4,either:[3,9],element:[3,4,6,8,9,10,11],empir:7,emploi:6,enabl:[4,5],end:9,ensembl:[2,3,5,10,11],ensemble_fss_skil:10,ensemble_fss_spread:10,ensscor:2,ensur:8,epsilon:6,equal:[6,9],equat:[6,8],error:9,estim:8,estimate_ar_params_yw:8,euclidean:6,euclidian:6,eulerian:[0,5],eumetnet:3,evalu:10,evenli:[9,10],event:2,exceed:10,exclud:[1,4,5,8],exist:3,explicit:6,exponenti:4,export_forecast_dataset:3,extens:3,extra_vector:6,extrap_kwarg:5,extrap_method:5,extrapol:[2,4,5],f_par:4,facecolor:11,factor:4,fals:[0,1,4,5,8,9,10,11],fast:[1,4],featur:6,fft:[1,4,5],fftgener:[2,5],field:[0,2,3,4,5,6,8,9,10,11],fig:11,figur:[10,11],file:[3,5],filenam:3,filer:4,filter:[1,4,5,6,9],filter_gaussian:1,filter_kwarg:5,filter_uniform:1,filter_xxx:1,find:3,find_by_d:3,finish:3,finit:[0,1,4,5,8,10],finnish:3,first:[1,3,6,11],fit:4,flat:4,flow:[0,2],fmi:3,fmi_pgm:3,fn_ext:3,fn_pattern:3,folder:11,follow:[1,3,4,5,11],forecast:[2,3,4,5,11],foresti:2,format:3,fort:[],forward:0,found:[3,6],four:[4,5,11],fourier:[1,4],fowler:2,fraction:[2,4,10],frame:11,frequenc:1,from:[0,1,2,3,4,5,6,7,8,9,10,11],frozen:5,fss:10,futur:3,gamma:8,gamma_1:8,gamma_2:8,gamma_l:8,gauss_scal:1,gauss_scale_0:1,gaussian:[1,4,5,6],gca:10,gener:[2,5,11],generate_bp:4,generate_motion_perturbations_bp:4,generate_noise_2d_fft_filt:4,generate_noise_2d_ssft_filt:4,generate_noise_2d_xxx_filt:4,generate_xxx:4,geodata:11,geograph:11,germann:[0,2],get:[6,9],get_colormap:11,get_method:[0,1,3,4,5,6,9],gif:3,gill:2,give:[2,4],given:[0,1,3,5,6,7,8,9,10],global:[4,6],greater:1,grid:[3,4,6],gridr:4,gzip:3,han:4,handl:10,harri:2,has:[3,4,5,7],have:[5,8,10],hdf5:3,height:[1,3,5],hersbach:2,hess:2,high:2,hist:7,histogram:[7,10],hourli:3,http:6,hydrolog:2,idea:4,identifi:3,identiti:3,ieee:2,ignor:[3,10],imag:[1,2,6],imaginari:4,implement:[0,1,3,4,5,6],import_bom_rf3:3,import_fmi_pgm:3,import_mch_gif:3,import_netcdf_pystep:3,import_odim_hdf5:3,import_xxx:3,includ:[2,4],increas:[2,4,8],increment:[3,5],index:2,individu:11,inform:[3,6,9,11],initi:[0,3,4,5,7,10],initialize_bp:4,initialize_forecast_exporter_netcdf:3,initialize_forecast_exporter_xxx:3,initialize_motion_perturbations_bp:4,initialize_nonparam_2d_fft_filt:4,initialize_nonparam_2d_nested_filt:4,initialize_nonparam_2d_ssft_filt:4,initialize_nonparam_2d_xxx_filt:4,initialize_param_2d_fft_filt:4,initialize_param_2d_xxx_filt:4,initialize_xxx:4,inizialize_xxx:4,inner:0,innov:8,input:[0,1,2,4,5,6,8,9,11],inputfn:3,insid:11,instanc:[5,11],instantan:3,institut:3,integ:[4,9],integr:[0,6],intens:[3,4,5,10],interest:11,interfac:2,intermedi:5,interpol:6,interpolate_sparse_vector:6,interv:10,invers:[0,6,9],ipol:6,iqr:6,irrevers:9,isol:6,iter:[0,5],iterate_ar_model:8,its:[3,4,9,10],joslyn:2,journal:2,jstar:2,kanad:6,keep:5,kei:[1,3,11],keyword:[3,4,5],kilomet:[4,5],kmperpixel:5,kwarg:[0,1,3,4,6,11],l_0:1,lag:8,lagrangian:[0,5],lambda:9,last:[5,8],latitud:11,law:4,lead:[4,6],lean:[2,10],least:6,left:[3,6,7,11],length:[4,8,9,10],level:[1,4,5,6,8],lib:4,like:[0,4,5,6,9,10,11],limit:[6,11],linalg:6,line:11,linear:6,linkag:6,list:[1,3,4,6,11],local:[4,6],locat:[3,11],logarithm:[1,4],longest:9,longitud:11,loop:11,lower:[3,11],lsq_method:6,lstsq:6,luca:6,lucaskanad:2,lucaskanade_features_track:6,m_x:6,m_y:6,magnitud:4,mai:3,mandatori:3,manipualt:9,mask:[1,4,5,8],mask_method:5,match:[3,5,7],matplotlib:[10,11],matrix:6,max:3,max_corners_st:6,max_level:4,max_spe:6,maxim:6,maximum:6,mch_gif:3,mean:[1,9,10],median:6,member:[3,5,10],memori:[5,6],merg:[2,4],messag:6,met:2,metadata:[3,9],meteor:[],meteorolog:[2,3],meteoswiss:[3,11],meter:[3,11],meterolog:3,method:[0,1,2,3,4,7,8,9,11],methodolog:2,min:[0,5],min_count:10,min_distance_st:6,min_nr_sampl:6,minim:6,minimum:[0,4,5,6,10],minut:[3,4,5,9,11],miscellan:[2,4,11],miss:[3,6,8],mittermai:2,mod:[],model:[2,4,5],modul:[1,2,3,4,5],mon:[],monthli:2,moor:6,more:6,morpholog:6,most:5,motion:[2,5,6,11],motion_plot:11,motionfield:2,move:10,mpl_toolkit:11,mtrand:4,multipl:[1,9],must:[1,4,5,6,9,11],n_bin:10,n_iter:0,n_prob_thr:10,n_t:6,n_x:6,n_y:6,name:[0,1,3,4,5,6,9],nan:[0,3],natur:4,nbr:6,nchunk:6,ndarrai:[1,4,5,6,7,8],nearest:6,necessari:9,need:[1,4,6,11],neighbor:6,neighborhood:6,nerini:2,nest:4,netcdf:3,network:2,newest:5,next:6,nloop:11,nois:[2,5],noise_kwarg:5,noise_method:5,noise_stddev_adj:5,non:[2,4,10],none:[0,3,4,5,6,8,9,10,11],nonparam_match_empirical_cdf:7,nonparametr:[4,5],norm:[6,11],normal:[1,4,10,11],note:9,nowcast:[2,3,4],nowcast_import:2,nr_iqr_outli:6,nr_levels_lk:6,num_cascade_level:5,num_ens_memb:[3,5,10],num_it:4,num_next_fil:3,num_prev_fil:3,num_timestep:[0,3,5],num_work:[4,5],number:[0,1,3,4,5,6,9,10,11],numpi:[4,5,6],nurmi:2,nwp:[2,4],object:[2,3,7,10,11],obs:[5,10],observ:[2,4,5,10,11],obtain:4,ocean:2,odim:3,odim_hdf5:3,offset:10,oldest:5,one:[0,1,3,5,6,7,9,11],onli:[9,11],open:6,opencv:6,oper:9,opera:3,optflow:2,optic:2,option:[0,1,3,4,5,6,8,9,10,11],order:[3,5,8,9],org:6,origin:[6,9],ort:2,orth:2,other:[0,1,3,4,5,6,11],otherwis:[0,3,5],ourier:2,out:[0,1,3,4,5,6,7,8,10,11],outlier:6,output:[1,2,4,5,6],outputarrai:9,outsid:[0,5],outval:0,over:[4,6],overlap:4,own:3,p_f:10,p_pert_par:4,p_pert_perp:4,packag:4,pad:9,page:2,pair:[1,3,10,11],parallel:[4,5],paramet:[0,1,3,4,5,6,7,8,9,10,11],parametr:4,pars:11,parse_proj4_str:11,parse_typ:11,part:4,pass:[1,4,6],path:[3,11],path_fmt:3,path_output:11,pattern:3,penros:6,percentag:4,perform:9,perpendicular:4,persist:[0,5],perturb:[4,5,8],pgm:3,phi:8,physic:[3,9],pierc:2,pixel:[0,1,3,4,5,6,7,8,9,10],pixelsperkm:4,plot:[2,4,9,11],plot_precip_field:11,plot_rankhist:10,plot_reldiag:10,plot_roc:10,plotanim:11,pmm:7,pmm_comput:7,pmm_init:7,pod:10,pofd:10,point:[6,10],polycollect:11,polyfit:4,possibl:[6,9,10],post:2,postproc:2,postprocess:[],power:4,practic:10,pramet:1,precip:3,precipfield:2,precipit:[0,2,3,4,5,6,9,10,11],precis:6,pred:10,predict:[2,10],preserv:5,previou:3,print:[6,11],print_info:6,probabilist:[2,4,10],probabl:[2,5,7,10],probmatch:2,probscor:2,procedur:4,process:[2,8],produc:[4,5,6,9,11],product:3,prog:5,program:6,progress:2,proj4str:11,proj:[3,11],project:[3,11],proport:[1,4],provid:3,prv:6,pseudoinvers:6,pub:6,pulkkinen:2,pylab:10,pyramid:6,python3:4,python:6,qind:3,qpe:3,qpf:2,qty:3,qualiti:[3,6],quality_level_st:6,quantiti:3,quarterli:2,quiver:11,r1314:[],r1415:[],r2122:[],r2222:[],r56:[],r67:[],r_fct:11,r_ob:11,r_thr:5,r_thr_1:4,r_thr_2:4,r_trg:7,radar:[2,3],radial:6,rain:[3,4,6,9],raindepth:9,rainfal:[2,3],rainfields3:3,rainrat:9,rais:9,random:[4,5],randomst:4,randstat:4,rank:[2,7,10],rankhist:10,rankhist_accum:10,rankhist_comput:10,rankhist_init:10,raster:[3,11],rate:[3,5,9],rcw201167:[],read:3,read_timeseri:3,reader:2,real:4,realiz:4,recent:5,rectangular:4,refer:[1,3,4,5,6,10],reflect:[3,4,9],regular:[5,8],relat:[4,8,9],relationship:[2,9],reldiag:10,reldiag_accum:10,reldiag_comput:10,reldiag_init:10,releas:2,reliabl:[2,10],remot:2,remov:9,repres:[5,6,10],request:3,requir:[0,1,3,4,5,6,8,10],resampl:11,research:2,reshap:9,resolut:[2,3,4,5,11],respect:[1,3,4,5,8],result:[5,8],return_displac:0,return_output:5,rev:[],revers:9,review:2,rezacova:2,rezcova:10,rf3:3,right:[3,11],robert:[2,10],roc:10,roc_curve_accum:10,roc_curve_comput:10,roc_curve_init:10,root:3,root_path:3,routin:2,row:6,royal:2,ruzanski:[2,6],rxr:6,rzc:3,same:[3,7,9],sampl:[4,6,10],save:[5,11],savefig:11,scale:[2,4,10],scheme:[0,2,4],scienc:2,score:[2,10],scores_det_cat_fcst:10,scores_det_cont_fcst:10,sdotpo:2,search:[2,3,6],second:[1,3],section:9,see:[1,3,4,5,6,11],seed:[2,4,5],select:2,semi:0,semilagrangian:[2,5],sens:[2,6],sensit:6,separ:[1,3,6],sequenc:[3,6],seri:[0,2,5,11],set:[0,1,3,4,5,6,8,9,10,11],shape:[0,1,3,4,5,6,8,9,10,11],shi:6,shitomasi_features_to_track:6,shortest:9,side:[9,11],sideri:2,simpl:[5,8,10],simple_advect:2,simpli:5,simplic:4,simul:4,singl:6,size:[1,4,6,10],size_open:6,skill:[2,10],small:6,smaller:10,smith:2,smooth:5,societi:2,solv:6,sort:3,sourc:7,space:[2,4,9,10],spars:6,spatial:[1,4,5,8,10],spatialscor:2,specif:3,specifi:[0,1,3,4,5,8,9,10,11],spectrum:4,speed:6,split:6,spread:[2,10],sprog:5,sqrt:4,squar:[1,4,6,9],square_domain:9,ssft:4,stack:3,standard:[1,4,5,8],start:3,startdat:3,stationari:[2,4,8],statist:[1,4,5],std:1,step:[0,2,3,4,8,11],stochast:[2,4,5],str:[3,4,5,11],streamlin:11,streamplot:11,string:[3,4,6,9,11],strongest:6,structur:6,submodul:[],subpackag:[],success:[4,6],sum:[1,9],suppli:[4,5],support:3,svd:6,synonym:11,system:2,take:[4,5,6,11],taken:[0,4,10],taper:4,target:[4,7],technolog:2,tempor:[4,8],temporal_autocorrel:8,term:[8,10],test:9,text:11,than:[1,6,10],thei:[1,9],them:[3,6],thi:[0,1,2,3,4,5,10,11],third:10,those:4,thr:[6,10],three:[1,3,5,6,8,11],threshold:[3,4,5,6,9,10],time:[0,2,3,4,5,6,9,11],time_window:9,time_window_min:9,timeseri:2,timestamp:[3,5,11],timestemp:3,timestep:[3,4,5,6,8],timestep_min:11,titl:11,to_raindetph:9,to_rainr:9,to_reflect:9,token:11,tomasi:6,tool:3,top:11,topic:2,total:[0,9],track:6,trajectori:0,transform:[1,2,3,4],treat:3,tupl:[0,1,3,4,6,9,10],two:[0,1,3,4,5,6,8,10,11],type:4,under:10,uniform:1,unit:[3,4,6,9,11],unrealist:6,unsquare_domain:9,updat:9,upper:[3,6,11],urban:2,usag:6,use:[1,4,5,6,8,9,10,11],use_precip_mask:5,use_probmatch:5,used:[1,3,4,5,6,9,10,11],useful:11,uses:4,using:[1,3,4,5,6,8],usr:4,util:[2,3,5],valid:11,valu:[0,1,3,4,5,6,7,8,9,10,11],variat:6,variou:[3,9],vector:[0,4,5,6],vel_pert_kwarg:5,vel_pert_method:5,veloc:[0,4,5,6],verbos:6,veri:6,verif:2,verifi:10,visual:2,w2d:4,waf993:2,walker:8,wang:2,want:11,war_thr:4,watkin:2,wavenumb:1,wea:[],weather:2,weigel:2,weight:[1,4],weights_1d:1,weights_2d:1,when:11,where:[1,3,4,5,9,10,11],whether:4,which:[2,4,6,7,11],white:4,who:3,whole:1,whose:[3,4,7],width:[1,3,5],wilson:2,win_siz:4,win_typ:4,window:[4,6,9,10],window_s:9,winsize_lk:6,with_basemap:11,within:[6,9],withing:10,without:3,worker:[4,5],worth:[],write:[3,5],written:[3,5],www:6,x_f:10,x_min:10,x_o:10,xpixels:3,xxx:3,yes:10,yorigin:[3,11],ypixels:3,yule:8,zacharov:[2,10],zawadzki:2,zero:[1,6,7,9,10],zerovalu:[3,9]},titles:["Advection-based extrapolation (<code class=\"docutils literal\"><span class=\"pre\">pysteps.advection</span></code>)","Scale-based decomposition of precipitation fields (<code class=\"docutils literal\"><span class=\"pre\">pysteps.cascade</span></code>)","pysteps Reference","Input/output routines (<code class=\"docutils literal\"><span class=\"pre\">pysteps.io</span></code>)","Noise generators (<code class=\"docutils literal\"><span class=\"pre\">pysteps.noise</span></code>)","Nowcasting methods (<code class=\"docutils literal\"><span class=\"pre\">pysteps.nowcasts</span></code>)","Optical flow methods (<code class=\"docutils literal\"><span class=\"pre\">pysteps.optflow</span></code>)","Post-processing of forecasts (<code class=\"docutils literal\"><span class=\"pre\">pysteps.postproc</span></code>)","Time series modeling and analysis (<code class=\"docutils literal\"><span class=\"pre\">pysteps.timeseries</span></code>)","Miscellaneous utility functions (<code class=\"docutils literal\"><span class=\"pre\">pysteps.utils</span></code>)","Forecast verification (<code class=\"docutils literal\"><span class=\"pre\">pysteps.verification</span></code>)","Visualization (<code class=\"docutils literal\"><span class=\"pre\">pysteps.visualization</span></code>)"],titleterms:{"export":3,"function":9,"import":3,advect:0,analysi:8,anim:11,archiv:3,autoregress:8,bandpass_filt:1,base:[0,1],bibliographi:2,cascad:1,content:[],convers:9,correl:8,dart:6,decomposit:1,detcatscor:10,detcontscor:10,dimens:9,document:[],ensscor:10,extrapol:0,fftgener:4,field:1,flow:6,forecast:[7,10],gener:4,indic:2,input:3,interfac:[0,1,3,4,5,6,9],lucaskanad:6,manual:2,method:[5,6],miscellan:9,mod:[],model:8,modul:[],motion:4,motionfield:11,nois:4,nowcast:5,nowcast_import:3,optflow:6,optic:6,output:3,packag:[],plot:10,post:7,postproc:7,postprocess:[],precipfield:11,precipit:1,probmatch:7,probscor:10,process:7,pystep:[0,1,2,3,4,5,6,7,8,9,10,11],reader:3,refer:2,routin:3,scale:1,scheme:[],semilagrangian:0,seri:8,simple_advect:5,spatialscor:10,step:5,submodul:[],subpackag:[],tabl:2,time:8,timeseri:8,transform:9,util:[4,9,11],verif:10,visual:11,welcom:[]}})