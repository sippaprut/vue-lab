<?php 
if ( ! function_exists('checkDelivery')) {

	function checkDelivery()
	{
		
		$CI = & get_instance();
		$shop = $CI->load->get_var('shops');
		$user_session = $CI->session->get_user();

		if ($shop['allow_same_day'] == 1 and !empty($shop['condition_same_day'])) 
		{
			$deliverydate = date('Y-m-d ', strtotime(str_replace("-","/", $user_session['delivery']['datedelivery'])));
            $deliverydate .= Vars::get( $user_session['delivery']['hoursdelivery'] , "00") . ":";
            $deliverydate .= Vars::get( $user_session['delivery']['minutesdelivery'] , "00") . ":00";
      
            if (strtotime(date('Y-m-d')) > strtotime($deliverydate) ){
                echo '<script type="text/javascript">
                        alert("Please Entered Date of Service/Delivery is a  future!");
                      </script>';
                redirect('delivery','refresh');
            }

            if (strtotime(date('Y-m-d')) < strtotime($deliverydate) ){
                return true;
            }

            $condition = json_decode($shop['condition_same_day'] , true);
            $selectDay = $deliverydate;
            $timeSelect = strtotime(date('H:i' , strtotime($selectDay)));
            $daynumber = date('w' , strtotime(date('Y-m-d H:i:s')) );
            $dayCondition = isset($condition[$daynumber]) ? $condition[$daynumber] : null;

            if (!empty($dayCondition) and sizeof($dayCondition) > 0){
                if (strtotime($dayCondition['start']) <= $timeSelect and strtotime($dayCondition['end']) >=  $timeSelect  ) {
                } else {
                    echo '<script type="text/javascript">
                        alert("Please Entered Date of Service/Delivery is a future!");
                      </script>';
                    redirect('delivery','refresh');
                }
            }
		}
		else
		{
			$deliverydate = date('Y-m-d',strtotime(str_replace("-","/",$user_session['delivery']['datedelivery'])));
            if ($shop['allow_same_day'] == 0 and strtotime(date("Y-m-d")) > strtotime($deliverydate)) {
                echo '<script type="text/javascript">alert("Please Entered Date of Service/Delivery is a future!1");</script>';
                redirect('delivery','refresh');
            }
		}
	}
}