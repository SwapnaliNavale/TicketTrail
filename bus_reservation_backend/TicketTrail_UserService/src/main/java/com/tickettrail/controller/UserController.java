package com.tickettrail.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tickettrail.dto.ApiResponse;
import com.tickettrail.dto.AuthRequest;
import com.tickettrail.dto.UserDTO;
import com.tickettrail.service.UserService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

//@RestController
//@RequestMapping("/users")
//public class UserController {
//	//depcy
//	@Autowired
//	private UserService userService;
//	@Autowired
//	private AuthenticationManager authenticationManager;
//	@Autowired
//	private JwtUtils jwtUtils;
//	/*
//	 * Desc - user sign up
//	 * URL - http://host:port/users/signup
//	 * Method - POST
//	 * Payload - user req dto
//	 * Success resp - Api resp
//	 * err - Api resp err mesg
//	 */
//	@PostMapping("/signup")
//	public ResponseEntity<?> registerUser(@RequestBody @Valid UserDTO dto) {
//		System.out.println("register user "+dto);
//		return ResponseEntity.status(HttpStatus.CREATED)
//				.body(userService.registerNewUser(dto));
//		
//	}
//	/*
//	 * Desc - user sign in
//	 * URL - http://host:port/users/signin
//	 * Method - POST
//	 * Payload - auth req dto
//	 * Success resp -Auth Resp DTO - mesg + JWT
//	 * err - Api resp err mesg
//	 */
//	@PostMapping("/signin")
//	public ResponseEntity<?> userSignIn(@RequestBody @Valid
//			AuthRequest dto) {
//		System.out.println("in sign in "+dto);
//		//1. Create auth token using suser supplied em n pwd
//		UsernamePasswordAuthenticationToken 
//		authenticationToken = new UsernamePasswordAuthenticationToken
//		(dto.getEmail(),dto.getPassword());
//		System.out.println(authenticationToken.isAuthenticated());//f
//		//2. invoke Spring sec supplied auth mgr's authenticate method
//		Authentication authToken = 
//				authenticationManager.authenticate(authenticationToken);
//		//=> auth success
//		System.out.println(authToken.isAuthenticated());//t
//		//3 . Send auth respone to the client containing JWTS
//		return ResponseEntity.status(HttpStatus.CREATED)
//				.body(new AuthResponse("Successful Auth !",
//						jwtUtils.generateJwtToken(authToken)));		
//		
//	}
	

//}

@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {
//	@Autowired //by constructor - spring reco way of D.I
	private final UserService userService;

	
	
	/*
	 * Desc - User signup 
	 * URL - http://host:port/users/signup
	 * Method - POST 
	 * payload - user reg dto 
	 * Successful Resp - SC 201, user details - all (dto) 
	 * Error resp - SC 400 , error mesg -wrapped in DTO(ApiResponse)
	 * 
	 */
	@PostMapping("/signup") //@RequestMapping(method=POST)
	public ResponseEntity<?> signUpUser(
			@RequestBody @Valid UserDTO dto) {
		System.out.println("in signup "+dto);
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(userService.signUp(dto));
		
	}		

	/*
	 * Desc - User signin 
	 * URL - http://host:port/users/signin 
	 * Method - POST 
	 * payload - dto (email n pwd) 
	 * Successful Resp - SC 200, user details - all (dto) 
	 * Error resp - SC 400 , error mesg -wrapped in DTO(ApiResponse)
	 * 
	 */
	@PostMapping("/signin") //@RequestMapping(method=POST)
	public ResponseEntity<?> signInUser(
			@RequestBody AuthRequest request) {
		//@RequestBody => Json -> Java (un marshalling | de ser)
		System.out.println("in signin " + request);
		try {
			return ResponseEntity.ok(
					userService.authenticateUser(request));
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.
					status(HttpStatus.BAD_REQUEST)
					.body(new ApiResponse(e.getMessage(),"error"));
		}
	}
	
	/*
     * Desc - User signout
     * URL - http://host:port/users/signout
     * Method - POST
     * Payload - JWT token (optional)
     * Successful Resp - SC 200, message - "User signed out successfully"
     * Error resp - SC 400, error message wrapped in DTO(ApiResponse)
     */
    @PostMapping("/signout")
    public ResponseEntity<?> signOutUser(@RequestHeader("Authorization") String token) {
        System.out.println("Signing out user with token: " + token);
        try {
            userService.signOut(token); // Implement this in UserService
            return ResponseEntity.ok(new ApiResponse("User signed out successfully", "success"));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse(e.getMessage(), "error"));
        }
    }

	/*
	 * Desc - Get User details 
	 * URL - http://host:port/users/{userId} 
	 * Method - GET 
	 * 
	 * Successful Resp - SC 200, user details - all (dto) 
	 * Error resp - SC 400 , error mesg -wrapped in DTO(ApiResponse)
	 * 
	 */
	@GetMapping("/{userId}")
	public ResponseEntity<?> getUserDetails(@PathVariable Long userId)
	{
		return ResponseEntity.ok(userService.getUserDetails(userId));
	}
	/*
	 * Desc - Get User details along with the blogs
	 * URL - http://host:port/users/{userId}/blogs 
	 * Method - GET 
	 * 
	 * Successful Resp - SC 200, user details + List <BlogDTO>
	 * Error resp - SC 400 , error mesg -wrapped in DTO(ApiResponse)
	 * 
	 */
//	@GetMapping("/{userId}/blogs")
//	public ResponseEntity<?> getUserDetailsWithBlogs(@PathVariable Long userId)
//	{
//		return ResponseEntity.ok(userService.getUserDetailsWithBlogs(userId));
//	}
	
	

}
